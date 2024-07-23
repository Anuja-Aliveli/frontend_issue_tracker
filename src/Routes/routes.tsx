import ForgotPassword from '../components/Authentication/ForgotPassword';
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';
import Main from '../components/Main/Main';
import MainContextProvider from '../components/Main/MainProvider';
import AuthContextLayout from '../Layouts/AuthLayout';
import ThemeProviderWrapper from '../Layouts/ThemeLayout';
import AuthGuard from './Authguard';

const routes = [
  {
    path: '/register',
    element: <Register />,
    layout: <AuthContextLayout />,
  },
  {
    path: '/login',
    element: <Login />,
    layout: <AuthContextLayout />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    layout: <AuthContextLayout />,
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <MainContextProvider>
          <Main />
        </MainContextProvider>
      </AuthGuard>
    ),
    layout: <ThemeProviderWrapper />,
  },
];

export default routes;
