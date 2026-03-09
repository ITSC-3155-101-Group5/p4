import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">

        <div className="header-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
            alt="logo"
            className="header-logo"
          />
        </div>

        <div className="header-center">
          <h1>Elijah's React Projects</h1>
          <p className="header-subtitle">Building cool web apps</p>
        </div>

        <div className="header-right">
          <span>ITSC 3155</span>
        </div>

      </div>
    );
  }
}

export default Header;
