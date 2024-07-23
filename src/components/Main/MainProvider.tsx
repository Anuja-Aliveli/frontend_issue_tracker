import { FC, ReactNode, useState } from 'react';
import MainContext from './MainContext';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ReportIcon from '@mui/icons-material/Report';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { SidebarOptions } from '../../Interfaces/MainInterface';
import {
  BOOKMARKS,
  CREATE_ISSUE,
  CREATE_PROJECT,
  DASHBOARD,
  ISSUES,
  PROJECTS,
} from '../../utils/constants';
import Dashboard from '../Dashboard/Dashboard';

interface MainContextProviderProps {
  children: ReactNode;
}

const MainContextProvider: FC<MainContextProviderProps> = ({ children }) => {
  const [isIconNavbar, setIsIconNavbar] = useState<boolean>(true);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedRoute, setSelectedRoute] = useState<string>(DASHBOARD);
  const sideBarOptions: SidebarOptions[] = [
    { text: 'Dashboard', icon: <DashboardIcon />, route: DASHBOARD },
    { text: 'Create Project', icon: <AddBoxIcon />, route: CREATE_PROJECT },
    { text: 'Projects', icon: <WorkIcon />, route: PROJECTS },
    { text: 'Create Issue', icon: <AddBoxIcon />, route: CREATE_ISSUE },
    { text: 'Issues', icon: <ReportIcon />, route: ISSUES },
    { text: 'Bookmark', icon: <BookmarkIcon />, route: BOOKMARKS },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const renderSelectedRoute = () => {
    switch (selectedRoute) {
      case DASHBOARD:
        return <Dashboard />;
      case CREATE_PROJECT:
        return <p>{CREATE_PROJECT}</p>;
      case PROJECTS:
        return <p>{PROJECTS}</p>;
      case CREATE_ISSUE:
        return <p>{CREATE_ISSUE}</p>;
      case ISSUES:
        return <p>{ISSUES}</p>;
      case BOOKMARKS:
        return <p>{BOOKMARKS}</p>;
      default:
        return <p>Default</p>;
    }
  };

  return (
    <MainContext.Provider
      value={{
        isIconNavbar,
        setIsIconNavbar,
        handleLogout,
        drawerOpen,
        setDrawerOpen,
        sideBarOptions,
        selectedRoute,
        setSelectedRoute,
        renderSelectedRoute,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
