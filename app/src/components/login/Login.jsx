import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import './login.css';

function Login() {
  const [globalcontext, setGlobalContext] = useContext(MainContext);
  const { logged, user } = globalcontext;

  const [islogged, setLogged] = useLocalStorage('logged', logged);
  const [, setUserData] = useLocalStorage('user', user);

  if (islogged) {
    return <Navigate to="/" />;
  }

  const handleLogin = () => {
    setLogged(true);
    const userData = {
      name: 'norbix',
      mail: 'norbix@mail.com',
      role: 'admin',
    };
    setUserData(userData);
    setGlobalContext((prevState) => {
      return {
        ...prevState,
        logged: true,
        user: userData,
      };
    });
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <button onClick={handleLogin}>INGRESAR</button>
    </div>
  );
}

export default Login;
