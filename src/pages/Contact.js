import React from "react";

const Contact = () => {
  const accoladeLeft = "{";
  const accoladeRight = "}";

  const rightPartContent = [
    {
      icon: "../location.svg",
      name: "Location",

      content: (
        <div className="pulseContainer">
          <div className="pulse"></div>
          <p className="locationContent">Currently in Bordeaux, FR</p>
        </div>
      ),
    },
    {
      icon: "../mail.svg",
      name: "Mail",
      content: (
        <div className="emailContainer">
          <a href="mailto:alexis.privat@live.fr" target="_blank">
            alexis.privat@live.fr
          </a>
        </div>
      ),
    },
    {
      icon: "../socialNetwork.svg",
      name: "Social",
      content: (
        <div className="socialContainer">
          <a href="https://github.com/Shiffff" target="_blank">
            <img src="../gitHub.svg" alt="GitHub"></img>
          </a>
          <a href="https://www.linkedin.com/in/alexis-privat" target="_blank">
            <img src="../linkedin.svg" alt="LinkedIn"></img>
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="contactPage">
      <span className="pointTitle nexttitle contactFirst sizeAcolade">
        {accoladeLeft}
      </span>
      <h2 className="pageTitle contactTitle ">CONTACT</h2>
      <span className="pointTitle nexttitle sizeAcolade">{accoladeRight}</span>
      <div className="contactPageContainer">
        <div className="contactPageLeftPart">
          <p>
            Let<span className="spanContactLeftPart">'</span>s <br /> Talk !
          </p>
        </div>
        <div className="contactPageRightPart">
          {rightPartContent.map((content, index) => (
            <div key={index} className="contactElContainer">
              <div className="contactElTop">
                <img src={content.icon}></img>
                <h3>{content.name}</h3>
              </div>
              <div className="contactElBottom">{content.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
