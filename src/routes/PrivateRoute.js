import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = ({ currentUser, redirectPath = '/signin', children }) => {
  if (!currentUser) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
