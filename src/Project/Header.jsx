
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
  setShowMenu(!showMenu);
};

  return (

    <>
      <header>
        <nav>
          <h1>
            Priya Kumari.
            <FlutterDashIcon style={{ color: "black", fontSize: "40px" }} />
          </h1>
         <div className={`nav-links ${showMenu ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink exact to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" onClick={toggleMenu}>
                  Service
                </NavLink>
              </li>
            </ul>
          </div>
          <i
            id="menu-bar"
            className={`fas fa-bars ${showMenu ? "fa-times" : ""}`}
            onClick={toggleMenu}
          ></i>
        </nav>
      </header>
    </>
  )
}

export default Header
