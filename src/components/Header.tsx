import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/_header.scss';

function Header() {
  return (
    <div className="header">
      <h2>
        <NavLink to="/">RSS React</NavLink>
      </h2>
      <ul className="nav__menu">
        <li className="menu__item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'item_active' : '')}
            data-testid="home-link"
          >
            Home
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'item_active' : '')}
            data-testid="about-link"
          >
            About Us
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/form"
            className={({ isActive }) => (isActive ? 'item_active' : '')}
            data-testid="form-link"
          >
            Form
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
