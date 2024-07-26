import { FC, ReactNode, useState } from 'react';
import MainContext from './MainContext';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { SidebarOptions } from '../../Interfaces/MainInterface';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import {
  BOOKMARKS,
  CREATE_ISSUE,
  CREATE_PROJECT,
  DASHBOARD,
  ISSUES,
  LOGIN,
  PROJECTS,
} from '../../utils/constants';
import Dashboard from '../Dashboard/Dashboard';
import BugReportIcon from '@mui/icons-material/BugReport';
import CreateProject from '../CreateProject/CreateProject';

interface MainContextProviderProps {
  children: ReactNode;
}

const MainContextProvider: FC<MainContextProviderProps> = ({ children }) => {
  const [isIconNavbar, setIsIconNavbar] = useState<boolean>(true);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedRoute, setSelectedRoute] = useState<string>(DASHBOARD);
  const sideBarOptions: SidebarOptions[] = [
    { text: 'Dashboard', icon: <DashboardIcon />, route: DASHBOARD },
    {
      text: 'Create Project',
      icon: <CreateNewFolderIcon />,
      route: CREATE_PROJECT,
    },
    { text: 'Projects', icon: <WorkIcon />, route: PROJECTS },
    { text: 'Create Issue', icon: <AddBoxIcon />, route: CREATE_ISSUE },
    { text: 'Issues', icon: <BugReportIcon />, route: ISSUES },
    { text: 'Bookmark', icon: <BookmarkIcon />, route: BOOKMARKS },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    navigate(LOGIN);
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
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
