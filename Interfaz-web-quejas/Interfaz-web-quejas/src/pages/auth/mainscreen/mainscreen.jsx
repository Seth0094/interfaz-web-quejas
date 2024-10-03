import React from 'react';
import { Link } from 'react-router-dom';
import './mainscreen.css';

const MainScreen = () => {
  return (
    <div className="main-screen">
      <h1>Complaint Line</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default MainScreen;
