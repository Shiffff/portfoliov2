import React from "react";

const Project = () => {
  const projects = [
    {
      title: "Professeur Coquille",
      mission:
        "A secure platform was developed for a teacher and their students using React, Node.js, Express, and MongoDB. The project was deployed on a Hostinger VPS using PM2 and Nginx, The platform allows users to login with credentials and share content similar to a social network, as well as provide courses to students.",
      outils: [
        {
          name: "HTML",
          pic: "../logo192.png",
        },
        {
          name: "javascript",
        },
      ],
      link: "",
    },
    {
      title: "test1",
      picture: "../test1.png",
      mission:
        "A secure platform was developed for a teacher and their students using React, Node.js, Express, and MongoDB. The project was deployed on a Hostinger VPS using PM2 and Nginx. The platform allows users to login with credentials and share content similar to a social network, as well as provide courses to students.",

      outils: [
        {
          name: "Name1",
        },
      ],
      link: "",
    },
    {
      title: "test1",
      mission: "fafazfaz fa az faz fa faz",
      outils: [
        {
          name: "Name1",
        },
      ],
      link: "",
    },
    {
      title: "test1",
      mission: "fafazfaz fa az faz fa faz",
      outils: [
        {
          name: "Name1",
        },
      ],
      link: "",
    },
    {
      title: "test1",
      mission: "fafazfaz fa az faz fa faz",
      outils: [
        {
          name: "Name1",
        },
      ],
      link: "",
    },

    {
      title: "test1",
      mission: "fafazfaz fa az faz fa faz",
      outils: [
        {
          name: "Name1",
        },
      ],
      link: "",
    },

    {
      title: "test1",
      mission: "fafazfaz fa az faz fa faz",
      outils: [
        {
          name: "Name1",
        },
      ],
      link: "",
    },
  ];

  return (
    <div className="projectPage">
      <h2 className="pageTitle">
        PORTFOLIO <span className="pointTitle nexttitle">.</span>
      </h2>
      <div className="projectContainer">
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <div className="projectLeftPart">
                <div className="projectContent">
                  <p className="projectTitle">{project.title}</p>
                  <p className="projectMission">{project.mission}</p>
                  <div className="outilsCardContainer">
                    {project.outils.map((outil, index) => (
                      <div className="outilCard" key={index}>
                        <p>{outil.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z"
                  fill="#ffff"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
