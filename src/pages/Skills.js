import React from "react";

const Skills = () => {
  const parentheseLeft = "<";
  const parentheseRight = "/>";

  const hardSkills = [
    {
      title: "Web",
      skills: [
        {
          name: "javascript",
          pic: "../js.svg",
        },
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
          name: "mongodb",
          pic: "../mongo.svg",
        },
        {
          name: "sass",
          pic: "../sass.svg",
        },

        {
          name: "html",
          pic: "../html.svg",
        },
        {
          name: "css",
          pic: "../css.svg",
        },
        {
          name: "bootstrap",
          pic: "../bootstrap.svg",
        },
      ],
    },
    {
      title: "Deployment",
      skills: [
        {
          name: "Nginx",
          pic: "../nginx.svg",
        },
        {
          name: "pm2",
          pic: "../pm2.png",
        },
      ],
    },
    {
      title: "Other",
      skills: [
        {
          name: "git",
          pic: "../git.svg",
        },
        {
          name: "figma",
          pic: "../figma.svg",
        },
        {
          name: "notion",
          pic: "../notion.svg",
        },
        {
          name: "vscode",
          pic: "../vscode.svg",
        },
        {
          name: "photoshop",
          pic: "../photoshop.svg",
        },
        {
          name: "trello",
          pic: "../trello.svg",
        },
        {
          name: "wordpress",
          pic: "../wordpress.svg",
        },
      ],
    },
    {
      title: "Soft Skill",
      skills: [
        {
          name: "Teamwork",
          pic: "../teamwork.svg",
        },
        {
          name: "Communication",
          pic: "../communication.svg",
        },
        {
          name: "Motivation",
          pic: "../motivation.svg",
        },
        {
          name: "Leadership",
          pic: "../leadership.svg",
        },
        {
          name: "Empathy",
          pic: "../empathize.svg",
        },

        {
          name: "Flexibility",
          pic: "../flexibility.svg",
        },
      ],
    },
  ];

  return (
    <div className="skillsPage">
      <span className=" nexttitle nexttitleSkillsLeft">{parentheseLeft}</span>
      <h2 className="pageTitle">SKILLS</h2>
      <span className=" nexttitle nexttitleSkillsRight">{parentheseRight}</span>
      <div className="skillFullContainer">
        <div className="skillContainer">
          {hardSkills.map((hardskill, index) => (
            <div key={index} className="hardSkillFullContainer">
              <h4>{hardskill.title}</h4>
              <div className="hardSkillContainer">
                {hardskill.skills.map((skill, index) => (
                  <div key={index} className="hardSkill">
                    <div className="imgSkillContainer">
                      <img src={skill.pic}></img>
                    </div>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
