import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
const HasCredentialRoute = ({ children, login, currentUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      <Navigate to={navigate(-1)} />;
    }
  }, [login, navigate]);
  return children ? children : <Outlet />;
};

export default HasCredentialRoute;
