import ForgotPassword from '../components/Authentication/ForgotPassword';
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';
import AuthContextLayout from '../Layouts/AuthLayout';
import ThemeContextLayout from '../Layouts/ThemeLayout';

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
    path: '/other',
    element: <p>Hello</p>,
    layout: <ThemeContextLayout />,
  },
];

export default routes;
