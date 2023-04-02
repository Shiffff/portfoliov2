import React from "react";

const Contact = () => {
  const accoladeLeft = "{";
  const accoladeRight = "}";
  return (
    <div className="contactPage">
      <h2 className="pageTitle">
        <span className="pointTitle nexttitle">{accoladeLeft}</span>CONTACT
        <span className="pointTitle nexttitle">{accoladeRight}</span>
      </h2>
      <div className="contactPageContainer">
        <div className="contactPageLeftPart">
          <p>
            Let's <br /> Talk !
          </p>
        </div>
        <div className="contactPageRightPart">
          <div className="contactPageLocation">
            <div className="locationUpPart">
              <img src="../logo192.png"></img>
              <p>Test121235413</p>
            </div>
            <div className="locationBotPart">
              <p>BlablaEncore</p>
            </div>
          </div>
          <div className="contactPageLocation">
            <div className="locationUpPart">
              <img src="../logo192.png"></img>
              <p>Test121235413</p>
            </div>
            <div className="locationBotPart">
              <p>BlablaEncore</p>
            </div>
          </div>
          <div className="contactPageLocation">
            <div className="locationUpPart">
              <img src="../logo192.png"></img>
              <p>Test121235413</p>
            </div>
            <div className="locationBotPart">
              <p>BlablaEncore</p>
            </div>
          </div>
          <div className="contactPageLocation">
            <div className="locationUpPart">
              <img src="../logo192.png"></img>
              <p>Test121235413</p>
            </div>
            <div className="locationBotPart">
              <p>BlablaEncore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
