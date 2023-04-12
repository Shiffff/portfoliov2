import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Récupérer l'URL courante
    const currentPath = window.location.pathname;
    // Trouver l'index de l'URL courante dans la liste des liens
    const currentIndex = links.findIndex((link) => link.href === currentPath);
    // Mettre à jour l'index actif
    setActiveIndex(currentIndex);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    window.scrollTo(0, 0);
  };

  const links = [
    {
      href: "/",
      icon: "../home.svg",
      text: "Home",
    },
    {
      href: "/skills",
      icon: "../skills.svg",
      text: "Skills",
    },
    {
      href: "/portfolio",
      icon: "../portfolio.svg",
      text: "Portfolio",
    },
    {
      href: "/about",
      icon: "../profil.svg",
      text: "About me",
    },
    {
      href: "/contact",
      icon: "../message.svg",
      text: "Contact",
    },
  ];

  return (
    <div className="navigation">
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <NavLink to={link.href}>
              <span className="icon">
                <img src={link.icon} alt={link.text} />
              </span>
              <span className="text">{link.text}</span>
            </NavLink>
          </li>
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default NavBar;
