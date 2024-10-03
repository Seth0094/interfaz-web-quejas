import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ roles, component: Component }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.token) {
    return <Navigate to="/" />;
  }

  const userHasRequiredRole = roles.some(role => auth.roles.includes(role));

  if (!userHasRequiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <Component />;
};

export default PrivateRoute;
