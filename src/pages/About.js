import React from "react";

const About = () => {
  const arrayLeft = "[";
  const arrayRight = "]";

  return (
    <div className="aboutPage">
      <h2 className="pageTitle">
        ABOUT{" "}
        <span className="pointTitle nexttitle nexttitleAbout">{arrayLeft}</span>
        ME
        <span className="pointTitle nexttitle nexttitleAbout">
          {arrayRight}
        </span>
      </h2>
      <div className="aboutPageContainer">
        <div className="aboutPageLeft"></div>
        <div className="aboutPageRight">
          <p>
            Hello, my name is Alexis Privat. I've been coding for several years,
            and a little over a year ago, I decided to turn my passion into a
            profession. I first took a course to refresh my knowledge of HTML,
            CSS, and JavaScript, then specialized in JavaScript and ReactJS
            through a second course. During my training, I worked on various
            projects, including one that is used daily by dozens of students. I
            developed the front-end, back-end, and deployment, which allowed me
            to acquire strong skills. You can find this project in my portfolio.
            <br />
            <br />
            I mainly work with React, Redux, and Node.js, but I'm always looking
            to acquire new skills. That's why I plan to take the "Full-Stack
            Developer - Java and Angular" course from OpenClassrooms starting in
            September 2023. I'm currently looking for a company to do this
            course in alternating training.
            <br />
            <br /> Outside of development, I enjoy sports, especially snow
            sports and running, chess, and video games.
            <br />
            <br />
            You can find my resume below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
