import React, { useEffect } from "react";
import ParticlesBg from "../components/ParticlesBg";

const Home = () => {
  const mainStack = [
    {
      name: "react",
      pic: "../react.svg",
    },
    {
      name: "redux",
      pic: "../redux.svg",
    },
    {
      name: "nodejs",
      pic: "../nodejs.svg",
    },
    {
      name: "javascript",
      pic: "../js.svg",
    },
  ];
  useEffect(() => {
    document.title = "Home - Alexis PRIVAT";
  }, []);

  return (
    <div>
      <ParticlesBg />
      <div className="homeContainer">
        <h1>Alexis PRIVAT</h1>
        <h2>Web developer</h2>
        <div className="pulseContainer homeLocation">
          <div className="pulse"></div>
          <p className="locationContent">Currently in Bordeaux, FR</p>
        </div>
        <div className="socialContainer socialContainerHome">
          <a href="https://github.com/Shiffff" target="_blank" rel="noreferrer">
            <img src="../gitHub.svg" alt="GitHub"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/alexis-privat"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../linkedin.svg" alt="LinkedIn"></img>
          </a>
        </div>
        <div className="homeStacks">
          {mainStack.map((stack, index) => (
            <img key={index} src={stack.pic} alt={stack.name}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
