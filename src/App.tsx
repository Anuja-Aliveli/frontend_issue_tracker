import { Route, Routes } from 'react-router-dom';
import routes from './Routes/routes';

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, element, layout, children }) => (
        <Route key={path} element={layout}>
          <Route path={path} element={element}>
            {children &&
              children.map(({ path: childPath, element: childElement }) => (
                <Route
                  key={childPath}
                  path={childPath}
                  element={childElement}
                />
              ))}
          </Route>
        </Route>
      ))}
    </Routes>
  );
};

export default App;
