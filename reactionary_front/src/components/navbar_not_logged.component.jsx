import React from 'react';
import { useTranslate } from 'react-polyglot';
import { Link } from 'react-router-dom';

const NavBarNotLogged = () => {
  const t = useTranslate();

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/register" className="nav-link">
          {t('registration')}
        </Link>
        <Link to="/login" className="nav-link">
          {t('login')}
        </Link>
      </div>
    </div>
  );
};

export default NavBarNotLogged;
