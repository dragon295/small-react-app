import React, { useState, useEffect, useContext } from 'react';
import { auth, storage } from './firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  GoogleAuthProvider,
  signInWithRedirect,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';

const getLocalStorageLogin = () => {
  if (localStorage.getItem('login')) {
    return JSON.parse(localStorage.getItem('login'));
  } else {
    return false;
  }
};

const convertErrorCode = (err) => {
  return err.code
    .match(/\w+/g)
    .slice(1)
    .join(' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, (val) => val.toUpperCase());
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [login, setLogin] = useState(getLocalStorageLogin());
  const [loading, setLoading] = useState(false);
  const [loadingGoogleSignin, setLoadingGoogleSignin] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [scrollChangeBg, setScrollChangeBg] = useState(false);
  const provider = new GoogleAuthProvider();

  const signup = async (email, password, defaultCredentials) => {
    setError('');
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Signup successful');
      defaultCredentials();
    } catch (error) {
      setError(
        `Error: ${error.code
          .match(/\w+/g)
          .slice(1)
          .join(' ')
          .replace(/(^\w{1})|(\s+\w{1})/g, (val) => val.toUpperCase())}`
      );
    }
    setLoading(false);
  };

  const signin = async (email, password, navigate) => {
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLogin(true);
      navigate(0);
    } catch (error) {
      if (
        convertErrorCode(error) === 'Invalid Email' ||
        convertErrorCode(error) === 'User Not Found' ||
        convertErrorCode(error) === 'Wrong Password' ||
        convertErrorCode(error) === 'Internal Error'
      ) {
        setError('Email or password is not correct, Please try again');
      } else {
        setError(convertErrorCode(error));
      }
    }
    setLoading(false);
  };

  const logout = async (navigate) => {
    try {
      await signOut(auth);
      setLogin(false);
      navigate('/signin');
    } catch (error) {
      setError(error.code);
    }
  };

  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email, {
        url: `https://small-react-app.vercel.app/signin`,
      });
      setMessage('Check your email for further instructions');
      setError('');
    } catch (error) {
      setMessage('');
      setError(convertErrorCode(error));
    }
  };

  const resetPassword = async (oobCode, newPassword, navigate) => {
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      navigate('/signin');
    } catch (error) {
      setError(convertErrorCode(error));
    }
  };

  const googleSignin = async (navigate) => {
    setLoadingGoogleSignin(true);
    try {
      navigate('/');
      await signInWithRedirect(auth, provider);
    } catch (error) {
      setError(convertErrorCode(error));
    }
    setLoadingGoogleSignin(false);
  };

  const updateProfileUser = async (val, navigate) => {
    const storageRef = ref(storage, `images/${val[0].name}`);
    try {
      await uploadBytes(storageRef, val[0]);
      const photoUpdateURL = await getDownloadURL(
        ref(storage, `images/${val[0].name}`)
      );
      await updateProfile(currentUser, {
        displayName: val[0].name + currentUser.uid,
        photoURL: photoUpdateURL,
      });

      navigate(0);
    } catch (error) {
      setError(convertErrorCode(error));
    }
  };

  const updateEmailUser = async (newEmail, password, navigate) => {
    const credential = EmailAuthProvider.credential(
      currentUser.email,
      password
    );
    try {
      await reauthenticateWithCredential(currentUser, credential);
      await updateEmail(currentUser, newEmail);
      setMessage('Update Email Successful');
      setError('');
      navigate('/account');
    } catch (error) {
      setMessage('');
      setError(convertErrorCode(error));
    }
  };

  const updatePasswordUser = async (currentPassword, newPassword, navigate) => {
    const credential = EmailAuthProvider.credential(
      currentUser.email,
      currentPassword
    );
    try {
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, newPassword);
      setMessage('Update Password Successful');
      setError('');
      navigate('/account');
    } catch (error) {
      setMessage('');
      setError(convertErrorCode(error));
    }
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (data) => {
      setCurrentUser(data);
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setError('');
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [error]);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setMessage('');
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [message]);

  const showScroll = () => {
    window.scrollY > 0 ? setScrollChangeBg(true) : setScrollChangeBg(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', showScroll);
    return () => window.removeEventListener('scroll', showScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('login', login);
  }, [login]);

  const value = {
    login,
    loading,
    loadingGoogleSignin,
    scrollChangeBg,
    message,
    error,
    setError,
    signup,
    signin,
    logout,
    currentUser,
    forgotPassword,
    resetPassword,
    googleSignin,
    updateProfileUser,
    updateEmailUser,
    updatePasswordUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
