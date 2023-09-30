import React, { Component } from 'react';
import '../params/Headera.css';
import Img from './Img';

const Header = () => {
    return (
      <header className="header-container">
        <div className="logo">
          <Img src="/logo192.png" alt="Logo" width="70" height="50" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;
