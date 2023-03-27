import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="navBarIcon">
                <img src="../home.svg" alt="home"></img>
              </span>
              <span className="navBarText">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="navBarIcon">
                <img src="../skills.svg" alt="skills"></img>
              </span>
              <span className="navBarText">Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="navBarIcon">
                <img src="../portfolio.svg" alt="portfolio"></img>
              </span>
              <span className="navBarText">Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="navBarIcon">
                <img src="../profil.svg" alt="profil"></img>
              </span>
              <span className="navBarText">About me</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="navBarIcon">
                <img src="../message.svg" alt="message"></img>
              </span>
              <span className="navBarText">Contact</span>
            </NavLink>
          </li>
          <div className="indicator"></div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
