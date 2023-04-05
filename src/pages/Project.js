import React from "react";

const Project = () => {
  const projects = [
    {
      title: "Billed",
      mission:
        "Bugs identified through a kanban were corrected, unit testing was conducted using jestjs, and an end-to-end testing plan was created.",

      outils: [
        {
          name: "javascript",
        },
        {
          name: "jestjs",
        },
        {
          name: "notion",
        },
      ],
      link: "",
    },
    {
      title: "Professeur Coquille",
      mission:
        "A secure platform was developed for a teacher and their students using React, Node.js, Express, and MongoDB. The project was deployed on a Hostinger VPS using PM2 and Nginx, The platform allows users to login with credentials and share content similar to a social network, as well as provide courses to students.",
      outils: [
        {
          name: "reactjs",
        },
        {
          name: "sass",
        },
        {
          name: "nodejs",
        },
        {
          name: "redux",
        },
        {
          name: "mongoDB",
        },
      ],
      link: "",
    },
    {
      title: "les petits plats",
      mission:
        "Two search algorithms were created with multiple filters, implemented through the responsibility pattern, with one version using native loops and another using functional programming with array methods. The performance of both versions was then tested.",
      outils: [
        {
          name: "javascript",
        },
        {
          name: "html",
        },
        {
          name: "css",
        },
      ],
      link: "",
    },
    {
      title: "groupomania",
      mission:
        "Create a secure enterprise social network with authentication/token. Manage profiles, allow users to post content on the platform, follow specific users, and more.",
      outils: [
        {
          name: "reactjs",
        },
        {
          name: "nodejs",
        },
        {
          name: "redux",
        },
        {
          name: "sass",
        },
        {
          name: "mongoDB",
        },
      ],
      link: "",
    },

    {
      title: "ohmyfood",
      mission: "Creation of SCSS animations based on a design mockup.",
      outils: [
        {
          name: "html",
        },
        {
          name: "sass",
        },
      ],
      link: "",
    },

    {
      title: "gameon",
      mission:
        "Multiple bugs were fixed, and an registration modal was implemented.",
      outils: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "javascript",
        },
      ],
      link: "",
      pic: ["../css.svg", "../cv.svg", "../css/svg"],
    },

    {
      title: "fisheye",
      mission:
        "Create an accessible website for a platform of photographers. Ensure logical navigation with tab support and use of aria-label tags.",
      outils: [
        {
          name: "html",
        },
        {
          name: "css",
        },
        {
          name: "javascript",
        },
      ],
      link: "",
      pic: ["../css.svg", "../cv.svg", "../css/svg"],
    },
  ];

  return (
    <div className="projectPage">
      <h2 className="pageTitle">PORTFOLIO</h2>
      <span className="pointTitle nexttitle">.</span>
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
