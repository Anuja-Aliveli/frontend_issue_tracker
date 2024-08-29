import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContextLayout from '../Layouts/AuthLayout';
import ThemeProviderWrapper from '../Layouts/ThemeLayout';
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
  EDIT_PROJECT,
  VIEW_PROJECT,
} from '../utils/constants';
import Projects from '../components/Projects/Projects';
import ProjectView from '../components/Projects/ProjectView';

// Lazy load components
const Register = lazy(() => import('../components/Authentication/Register'));
const Login = lazy(() => import('../components/Authentication/Login'));
const ForgotPassword = lazy(
  () => import('../components/Authentication/ForgotPassword'),
);
const Main = lazy(() => import('../components/Main/Main'));
const MainContextProvider = lazy(
  () => import('../components/Main/MainProvider'),
);
const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const CreateProject = lazy(
  () => import('../components/Projects/CreateProject'),
);

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
      { path: EDIT_PROJECT, element: <CreateProject /> },
      { path: VIEW_PROJECT, element: <ProjectView /> },
      { path: PROJECTS, element: <Projects /> },
      { path: CREATE_ISSUE, element: <p>{CREATE_ISSUE}</p> },
      { path: ISSUES, element: <p>{ISSUES}</p> },
      { path: BOOKMARKS, element: <p>{BOOKMARKS}</p> },
    ],
  },
];

export default routes;
