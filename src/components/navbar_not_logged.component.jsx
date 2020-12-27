import React from 'react';
import { Link } from 'react-router-dom';

const NavBarNotLogged = () => (
  <div className="navbar">
    <div className="nav-left">
      <Link to="/register" className="nav-link">
        Inscription
      </Link>
      <Link to="/login" className="nav-link">
        Connexion
      </Link>
    </div>
  </div>
);

export default NavBarNotLogged;
