import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css'; // Asegúrate de tener un archivo CSS para los estilos del navbar

const SENavbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">
        Complaint System - System Engineer Dashboard
      </div>
      <nav>
        <ul>
          <li><Link to="/view-assigned-complaint">Assigned Complaint</Link></li>
          <li><Link to="/view-sent-responses">Sent Responses</Link></li>
          <li><Link to="/profile-se">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default SENavbar;