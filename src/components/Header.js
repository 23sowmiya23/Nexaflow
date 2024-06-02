import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Nexaflow
        </Link>
        <nav className="nav-links">
          <Link to="/integration">Integration</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
