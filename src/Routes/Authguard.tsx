import React, { ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { LOGIN } from '../utils/constants';

const isAuthenticated = (): boolean => {
  return localStorage.getItem('token') !== null;
};

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
}): ReactElement | null => {
  return isAuthenticated() ? <>{children}</> : <Navigate to={LOGIN} />;
};

export default AuthGuard;
