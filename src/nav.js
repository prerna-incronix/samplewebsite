import React from 'react';
import './assets/styles.css';
import logo from './assets/pngs/polish-logo.png';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left section for company logo */}
      <div className="navbar__logo">
        <Link to='/home'>
        <img src={logo} alt="Company Logo" />
        </Link>
      </div>

      {/* Right section for links */}
      <ul className="navbar__links">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/Eyewear'>Eyewear</Link></li>
        <li><Link to='/Sunglass'>Sunglasses</Link></li>
        <li><NavLink to='/About'>Explore</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
