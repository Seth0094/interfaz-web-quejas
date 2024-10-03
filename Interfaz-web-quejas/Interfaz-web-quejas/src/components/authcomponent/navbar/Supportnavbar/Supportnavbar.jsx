
import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';




const SupportNavbar = () => {
    return (
      <header className="navbar">
        <div className="navbar-title">
          Complaint System - Support Dashboard
        </div>
        <nav>
          <ul>
          <li><Link to="/view-all-complaints-support">Complaint</Link></li>
          <li><Link to="/view-se">System Engineers</Link></li>
          <li><Link to="/profile-support">Profile</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default SupportNavbar;
