import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './axiosGlobal';

// Component
import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

import Account from './components/Account/Account';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import UpdateEmail from './components/UpdateEmail/UpdateEmail';
import UpdatePassword from './components/UpdatePassword/UpdatePassword';
import Footer from './components/Footer/Footer';

// Page
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Contact from './pages/Contact/Contact';
import PoliciesContainer from './pages/Policies/PoliciesContainer';
import Policies from './pages/Policies/Policies';
import Cookies from './pages/Policies/Cookies/Cookies';
import PrivatePolicy from './pages/Policies/PrivatePolicy/PrivatePolicy';
import RefundPolicy from './pages/Policies/RefundPolicy/RefundPolicy';
import TermsConditions from './pages/Policies/TermsConditions/TermsConditions';
import Blog from './pages/Blog/Blog';
import DetailBlog from './pages/Blog/DetailBlog';
import { CartContainer } from './pages/Cart/CartContainer';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Cart/Payment';
import Search from './pages/Search/Search';
import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';

// Routes
import ScrollToTop from './ScrollToTop';
import HasCredentialRoute from './routes/HasCredentialRoute';
import SpecialRoute from './routes/SpecialRoute';
import PrivateRoute from './routes/PrivateRoute';

import { Container, Typography, CircularProgress, Box } from '@mui/material';

import { useGlobalContext } from './context';

const App = () => {
  const { currentUser, loadingGoogleSignin, login } = useGlobalContext();

  if (loadingGoogleSignin) {
    return (
      <Container
        align='center'
        sx={{
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h5' textAlign='center'>
          <CircularProgress color='success' />
        </Typography>
      </Container>
    );
  }

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route
            path='/'
            element={
              <Box sx={{ bgcolor: 'rgb(30, 30, 30)' }}>
                <Home />
              </Box>
            }
          />

          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />

          <Route path='policies' element={<PoliciesContainer />}>
            <Route index element={<Policies />} />
            <Route path='cookies' element={<Cookies />} />
            <Route path='private-policy' element={<PrivatePolicy />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='terms-conditions' element={<TermsConditions />} />
          </Route>

          <Route path='blog' element={<Blog />}></Route>
          <Route path='blog/detail-blog' element={<DetailBlog />} />

          <Route path='*' element={<Error />} />

          <Route path='cart' element={<CartContainer />}>
            {' '}
            <Route index element={<Cart />} />
            <Route element={<PrivateRoute currentUser={currentUser} />}>
              <Route path='payment' element={<Payment />} />
            </Route>
          </Route>

          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />

          {/* Components */}

          <Route element={<PrivateRoute currentUser={currentUser} />}>
            <Route path='account' element={<Account />} />
          </Route>

          <Route element={<SpecialRoute currentUser={currentUser} />}>
            <Route path='update-email' element={<UpdateEmail />} />
            <Route path='update-password' element={<UpdatePassword />} />
          </Route>

          <Route path='/search' element={<Search />}></Route>

          <Route path='/products/:id' element={<ProductDetail />}></Route>
          <Route
            element={
              <HasCredentialRoute login={login} currentUser={currentUser} />
            }
          >
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
};

export default App;
