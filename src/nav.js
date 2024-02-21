import React from 'react';
import './assets/styles.css';
import logo from './assets/pngs/polish-logo.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import About from './About';

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
        <li>
          {/* Use ScrollLink for smooth scrolling */}
          <ScrollLink
            to="explore-section"  // Replace with the actual ID of your "Explore" section
            spy={true}
            smooth={true}
            duration={500}
            style={{cursor:'pointer'}}
          >
            Explore
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
