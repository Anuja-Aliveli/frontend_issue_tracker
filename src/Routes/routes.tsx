import ForgotPassword from '../components/Authentication/ForgotPassword';
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';
import Main from '../components/Main/Main';
import MainContextProvider from '../components/Main/MainProvider';
import AuthContextLayout from '../Layouts/AuthLayout';
import ThemeProviderWrapper from '../Layouts/ThemeLayout';
import Dashboard from '../components/Dashboard/Dashboard';
import CreateProject from '../components/CreateProject/CreateProject';
import AuthGuard from './Authguard';
import {
  FORGOT_PASSWORD,
  LOGIN,
  REGISTER,
  DASHBOARD,
  CREATE_PROJECT,
  PROJECTS,
  CREATE_ISSUE,
  ISSUES,
  BOOKMARKS,
} from '../utils/constants';

const routes = [
  {
    path: REGISTER,
    element: <Register />,
    layout: <AuthContextLayout />,
  },
  {
    path: LOGIN,
    element: <Login />,
    layout: <AuthContextLayout />,
  },
  {
    path: FORGOT_PASSWORD,
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
    children: [
      { path: DASHBOARD, element: <Dashboard /> },
      { path: CREATE_PROJECT, element: <CreateProject /> },
      { path: PROJECTS, element: <p>{PROJECTS}</p> },
      { path: CREATE_ISSUE, element: <p>{CREATE_ISSUE}</p> },
      { path: ISSUES, element: <p>{ISSUES}</p> },
      { path: BOOKMARKS, element: <p>{BOOKMARKS}</p> },
    ],
  },
];

export default routes;
