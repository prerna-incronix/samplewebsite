import React from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "./assets/pngs/polish-logo.png";
import "./assets/styles.css";
import './CategoryCatalogue';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left section for company logo */}
      <div className="navbar__logo">
        <NavLink to="/home">
          <img src={logo} alt="Company Logo" />
        </NavLink>
      </div>

      {/* Right section for links */}
      <ul className="navbar__links">
        <li>
          <NavLink exact to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/CategoryCatalogue" activeClassName="active">
            Eyewear
          </NavLink>
        </li>
        <li>
          <NavLink to="/SunglassCatalogue" activeClassName="active">
            Sunglasses
          </NavLink>
        </li>
        <li>
          {/* Use ScrollLink for smooth scrolling */}
          <ScrollLink
            to="explore-section"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
            className="scroll-link"
          >
            Explore
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
