import { Route, Routes } from 'react-router-dom';
import routes from './Routes/routes';

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, element, layout }) => (
        <Route key={path} element={layout}>
          <Route path={path} element={element} />
        </Route>
      ))}
    </Routes>
  );
};

export default App;
