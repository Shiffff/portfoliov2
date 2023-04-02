import React from "react";

const About = () => {
  const arrayLeft = "[";
  const arrayRight = "]";

  return (
    <div className="aboutPage">
      <h2 className="pageTitle">
        ABOUT <span className="pointTitle nexttitle">{arrayLeft}</span>ME
        <span className="pointTitle nexttitle">{arrayRight}</span>
      </h2>
    </div>
  );
};

export default About;
