import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { loginEmployee, logout } from '../../../services/authService';
import LoginForm from '../../../components/authcomponent/form/login/LoginForm';
import '../login/Login.css';
import LoginNavbar from '../../../components/authcomponent/navbar/Loginnavbar/Loginnavbar';

const Login = () => {
  const [ci, setCi] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Eliminar cualquier token previo
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      console.log('Sending login request...');
      const data = await loginEmployee(ci, password);
      console.log('Login response:', data);

      // Decodificar el token para extraer roles
      const roles = extractRolesFromToken(data.token);
      console.log('Extracted roles:', roles);

      // Actualizar el contexto de autenticación
      setAuth({ token: data.token, roles });

      // Redirigir al usuario según su rol
      if (roles.includes('admin')) {
        navigate('/admin-dashboard');
      } else if (roles.includes('support')) {
        navigate('/support-dashboard');
      } else if (roles.includes('se')) {
        navigate('/system-engineer-dashboard');
      } else {
        setError('Invalid role');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message);
    }
  };

  // Función para extraer roles desde el token
  const extractRolesFromToken = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      const decodedToken = JSON.parse(jsonPayload);
      return decodedToken.roles || [];
    } catch (error) {
      console.error('Error decoding token:', error);
      return [];
    }
  };

  return (
    <>
      <LoginNavbar />
      <LoginForm
        ci={ci}
        setCi={setCi}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        error={error}
      />
    </>
  );
};

export default Login;
