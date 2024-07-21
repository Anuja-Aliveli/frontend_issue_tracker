import React, { ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = (): boolean => {
  return localStorage.getItem('token') !== null;
};

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
}): ReactElement | null => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

export default AuthGuard;
