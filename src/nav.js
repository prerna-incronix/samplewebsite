import React from 'react';
import './assets/styles.css';
import logo from './assets/pngs/logo.png';
import { Link, NavLink } from "react-router-dom";

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
        <li><NavLink to='/About'>Explore</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
