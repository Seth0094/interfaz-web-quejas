import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom'; 

const LoginForm = ({ ci, setCi, password, setPassword, handleLogin, error }) => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>CI:</label>
          <input
            type="text"
            value={ci}
            onChange={(e) => setCi(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="forgot-password-link">
        <Link to="/forgot-password">¿Forgot your password?</Link>
      </div>
    </div>
  );
};

export default LoginForm;
