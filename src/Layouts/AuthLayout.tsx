import { Outlet } from 'react-router-dom';
import AuthContextProvider from '../components/Authentication/authProvider';

const AuthContextLayout = () => {
  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  );
};

export default AuthContextLayout;
