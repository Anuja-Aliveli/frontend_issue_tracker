import { createContext } from 'react';
import { SidebarOptions } from '../../Interfaces/MainInterface';

interface MainContext {
  handleLogout: () => void;
  isIconNavbar: boolean;
  setIsIconNavbar: (value: boolean) => void;
  setDrawerOpen: (value: boolean) => void;
  drawerOpen: boolean;
  sideBarOptions: SidebarOptions[];
}

const MainContext = createContext<MainContext | null>(null);

export default MainContext;
