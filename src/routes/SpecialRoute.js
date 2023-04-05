import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const SpecialRoute = ({ currentUser, redirectPath = '/account', children }) => {
  if (currentUser && currentUser.providerData?.[0].providerId !== 'password') {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

export default SpecialRoute;
