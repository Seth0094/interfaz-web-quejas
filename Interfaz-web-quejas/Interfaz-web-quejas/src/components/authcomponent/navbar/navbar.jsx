import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = ({ brand, links }) => {
    return (
      <nav className="navbar">
        <div className="brand">{brand}</div>
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    );
  };
  
  export default Navbar;
