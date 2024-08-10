import { Route, Routes } from 'react-router-dom';
import routes from './Routes/routes';
import { Suspense } from 'react';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default App;
