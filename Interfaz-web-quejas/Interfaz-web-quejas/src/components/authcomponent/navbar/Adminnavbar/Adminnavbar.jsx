import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css'; // Asegúrate de tener un archivo CSS para los estilos del navbar

const AdminNavbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">
        Complaint System - Admin Dashboard
      </div>
      <nav>
        <ul>
          <li><Link to="/view-all-complaints-admin">View Complaint</Link></li>
          <li><Link to="/register-employee">Register Employee</Link></li>
          <li><Link to="/view-employee">View Employee</Link></li>
        
          <li><Link to="/profile-admin">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminNavbar;
