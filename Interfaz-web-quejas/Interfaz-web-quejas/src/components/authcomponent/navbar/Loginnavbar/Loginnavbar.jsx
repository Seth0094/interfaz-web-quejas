import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css'; // Asegúrate de tener un archivo CSS para los estilos del navbar

const LoginNavbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">
        Complaint Line
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default LoginNavbar;
