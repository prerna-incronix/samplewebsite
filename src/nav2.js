import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./assets/styles.css";

const Navbar2 = () => {
    <div className="navbar_2">
        <div className="navbar__logo_2">
            <NavLink to="/home">
            <ul>
                <li><span id="polishText">POLISH</span></li>
                <li><span id="eyewearText">Eyewear</span></li>
            </ul>
            </NavLink>
        </div>
    </div>
}

export default Navbar2;