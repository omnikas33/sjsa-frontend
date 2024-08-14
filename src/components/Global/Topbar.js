import React from 'react';
import logo from '../../Images/logonew.png';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../../screens/ToggleSwitch'; 
import { useFontSize } from '../../screens/FontSizeContext'; 
import './Topbar.css';

const Topbar = () => {
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize(); 

  const skipToMainContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header-top-bar app" style={{ fontSize: `${fontSize}px` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 d-flex justify-content-center justify-content-lg-start mb-2 mb-lg-0">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-center justify-content-lg-end align-items-center flex-column flex-lg-row">
            {/* Day/Night Mode Toggle Button */}
            <ToggleSwitch />
            {/* Font Size Buttons */}
            <div className="btn-group mx-2 mb-2 mb-lg-0" role="group">
              <button className="btn btn-secondary" onClick={decreaseFontSize}>-</button>
              <button className="btn btn-secondary">{fontSize}px</button>
              <button className="btn btn-secondary" onClick={increaseFontSize}>+</button>
            </div>
            {/* Screen Reader Access Button */}
            <a
              href="#main-content"
              className="ml-2 d-block d-lg-inline"
              onClick={skipToMainContent}
              style={{ textDecoration: 'none' }}
            >
              Skip to main content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
