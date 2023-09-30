import React from 'react';
import '../params/Nav.css';

const Nav = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-sidemenu">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Customers
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
