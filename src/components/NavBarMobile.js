import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBarMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
    setIsActive(false);
  };

  const links = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/skills",
      text: "Skills",
    },
    {
      href: "/portfolio",
      text: "Portfolio",
    },
    {
      href: "/about",
      text: "About me",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ];

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navigationMobileContainer">
      <div
        className={`navigationMobileBtn ${isActive ? "active" : ""}`}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
      </div>
      <div className={`navigationMobile ${isActive ? "active" : ""}`}>
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className={`listMobile ${
                activeIndex === index ? "activeMobile" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <NavLink to={link.href}>
                <span className="textMobile">{link.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBarMobile;
