import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "./assets/pngs/logo.png";
import "./assets/styles.css";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", function() {
    // Trigger animation when the page is loaded
    document.getElementById("polishText").classList.add("fillInAnimation");
  });
  
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className="navbar">
      {/* Left section for company logo */}
      <div className="navbar__logo">
        <NavLink to="/home">
          {/* <ul>
            <li><span id="polishText">POLISH</span></li>
            <li><span id="eyewearText">Eyewear</span></li>
          </ul> */}
          <img src={logo} alt = "Polish Eyewear" />
        </NavLink>
      </div>

      {/* <div className='Mundo sans'>Mundo</div>
      <div className='Zebulon'>Zebulon</div> */}

      {/* Right section for links */}
      <ul className="navbar__links">
        <li>
          <NavLink exact to="/home" activeClassName="active" onClick={scrollToTop}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/CategoryCatalogue" activeClassName="active" onClick={scrollToTop}>
            Eyewear
          </NavLink>
        </li>
        <li>
          <NavLink to="/SunglassCatalogue" activeClassName="active" onClick={scrollToTop}>
            Sunglass
          </NavLink>
        </li>
        <li>
          {/* Conditionally render ScrollLink based on whether it's the home page */}
            <NavLink to="/About" onClick={scrollToTop}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
