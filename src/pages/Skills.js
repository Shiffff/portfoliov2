import React from "react";

const Skills = () => {
  const parentheseLeft = "<";
  const parentheseRight = "/>";

  const hardSkills = [
    {
      title: "Web",
      skills: [
        {
          name: "mongodb",
          pic: "../mongodb.svg",
        },
        {
          name: "sass",
          pic: "",
        },
        {
          name: "javascript",
          pic: "",
        },
        {
          name: "react",
          pic: "",
        },
        {
          name: "bootstrap",
          Pic: "",
        },
        {
          name: "html",
          pic: "",
        },
        {
          name: "css",
          pic: "",
        },
      ],
    },
    {
      title: "Deployment",
      skills: [
        {
          name: "Nginx",
          pic: "",
        },
        {
          name: "pm2",
          pic: "",
        },
      ],
    },
    {
      title: "Other",
      skills: [
        {
          name: "git",
          pic: "",
        },
        {
          name: "figma",
          pic: "",
        },
        {
          name: "notion",
          pic: "",
        },
        {
          name: "vscode",
          pic: "",
        },
        {
          name: "photoshop",
          pic: "",
        },
        {
          name: "trello",
          pic: "",
        },
      ],
    },
    {
      title: "Soft Skill",
      skills: [
        {
          name: "Teamwork",
          pic: "",
        },
        {
          name: "Communication",
          pic: "",
        },
        {
          name: "Motivation",
          pic: "",
        },
        {
          name: "Leadership",
          pic: "",
        },
        {
          name: "Empathy",
          pic: "",
        },

        {
          name: "Flexibility",
          pic: "",
        },
      ],
    },
  ];

  return (
    <div className="skillsPage">
      <h2 className="pageTitle">
        <span className=" nexttitle">{parentheseLeft}</span> SKILLS
        <span className=" nexttitle">{parentheseRight}</span>
      </h2>
      <div className="skillFullContainer">
        <div className="skillContainer">
          {hardSkills.map((hardskill, index) => (
            <div key={index} className="hardSkillFullContainer">
              <h4>{hardskill.title}</h4>
              <div className="hardSkillContainer">
                {hardskill.skills.map((skill, index) => (
                  <div key={index} className="hardSkill">
                    <div className="imgSkillContainer">
                      <img src={hardskill.pic}></img>
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
