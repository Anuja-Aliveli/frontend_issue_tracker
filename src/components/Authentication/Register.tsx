import { useContext } from 'react';
import AuthContext from './authContext';

const Register = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { darkModeOn, setDarkModeOn } = context;

  return (
    <>
      <h1>{darkModeOn ? 'Dark' : 'Light'}</h1>
      <button onClick={() => setDarkModeOn(!darkModeOn)}>Toggle Theme</button>
    </>
  );
};

export default Register;
