import React from 'react';
import '../params/Footer.css';

class Footer extends React.Component {
  render(){
      return (
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/fiba.png" alt="Logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a href="" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
