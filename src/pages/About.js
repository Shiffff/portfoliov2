import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <img
              className="profilPicOne"
              src="../profil_pic.png"
              alt="profile "
            />
          ) : (
            <img
              className="profilPicTwo"
              src="../profil_pic2.png"
              alt="profile "
            />
          )}
        </div>
        <div className="aboutPageRight">
          <p>
            <span className="aboutPageHi">Hi !</span>
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
            the front-end, back-end, and took care of the software deployment -
            enabling me to hone my skills quite a bit. You will be able to learn
            about this project in my portfolio.
            <br />
            <br />
            For now, I mainly work with{" "}
            <span className="aboutPageSentenceFormation">
              React, Redux, and Node.js{" "}
            </span>
            , and I am always eager to use new software and tools in order to
            learn new skills. As of late, I have been planning to take the{" "}
            <span className="aboutPageSentenceFormation">
              "Full-Stack Developer - Java and Angular"
            </span>{" "}
            course by OpenClassrooms, which will start in September 2023.{" "}
            <span className="aboutPageSentence">
              I am currently looking for a company that would allow me to take
              this course on a work-study basis.
            </span>
            <br />
            <br />
            Aside from software development, I enjoy sports, playing chess, and
            video games.
            <br />
            <br />
            You can find my resume{" "}
            <Link to="../CV.pdf" target="_blank">
              <span className="aboutPageResume">here.</span>
            </Link>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
