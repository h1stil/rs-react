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
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'item_active' : '')}>
            About Us
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'item_active' : '')}>
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
