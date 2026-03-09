import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">

        <div className="header-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="logo"
            className="header-logo"
          />
        </div>

        <div className="header-center">
          <h1>Group 5&apos;s Project</h1>
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
