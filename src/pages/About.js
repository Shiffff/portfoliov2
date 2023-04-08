import React, { useEffect, useState } from "react";

const About = () => {
  const arrayLeft = "[";
  const arrayRight = "]";

  const [currentPic, setCurrentPic] = useState(1);

  useEffect(() => {
    document.title = "About me - Alexis PRIVAT";
    const interval = setInterval(() => {
      setCurrentPic((currentPic) => (currentPic === 1 ? 2 : 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aboutPage">
      <h2 className="pageTitle">
        ABOUT
        <span className="pointTitle nexttitle nexttitleAbout">{arrayLeft}</span>
        ME
        <span className="pointTitle nexttitle nexttitleAbout">
          {arrayRight}
        </span>
      </h2>
      <div className="aboutPageContainer">
        <div className="aboutPageLeft">
          {currentPic === 1 ? (
            <img className="profilPicOne" src="../profil_pic.png" />
          ) : (
            <img className="profilPicTwo" src="../profil_pic2.png" />
          )}
        </div>
        <div className="aboutPageRight">
          <p>
            Hi,
            <br />
            <br />
            My name is Alexis Privat.
            <br />
            <br />
            I have been coding for several years, and a little over a year ago,
            I decided to turn my passion into a profession. I first took a
            course to refresh my knowledge of HTML, CSS, and JavaScript, then
            specialized in JavaScript and ReactJS through a second course.
            During my training, I worked on various projects, one of which is
            now being used by dozens of students on a daily basis. I developed
            the front-end, back-end, and took care of implementing the software
            too - enabling me to hone my skills quite a bit. You will be able to
            learn about this project in my portfolio.
            <br />
            <br />
            For now, I mainly work with React, Redux, and Node.js, and I am
            always eager to use new software and tools in order to learn new
            skills. As of late, I have been planning to take the "Full-Stack
            Developer - Java and Angular" course by OpenClassrooms, which will
            start in September 2023. I am currently looking for a company that
            would allow me to take this course on a work-study basis.
            <br />
            <br />
            Aside from software development, I enjoy sports, playing chess, and
            video games.
            <br />
            <br />
            You can find my résumé here.
            <br />
          </p>
        </div>
        <img className="aboutIcon skateIcon" src="../Skate.png"></img>
        <img className="aboutIcon ChessIcon" src="../Chess.png"></img>
        <img className="aboutIcon GamesIcon" src="../Games.png"></img>
      </div>
    </div>
  );
};

export default About;
