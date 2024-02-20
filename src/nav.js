import React from 'react';
import './assets/styles.css';
import logo from './assets/pngs/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left section for company logo */}
      <div className="navbar__logo">
        <img src={logo} alt="Company Logo" />
      </div>

      {/* Right section for links */}
      <ul className="navbar__links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Eyewear</a></li>
        <li><a href="#">Sunglasses</a></li>
        <li><a href="#">Explore</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
