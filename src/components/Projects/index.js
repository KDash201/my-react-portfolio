import React from "react";
import Projectlist from "../Projectlist";
import "./style.css";

function Projects(props) {
  const projectArr = [
    {
      url: "https://kdash201.github.io/wet-nose-adoption/",
      title: "Wet Nose Adoption",
      github: "https://github.com/KDash201/wet-nose-adoption",
      class: "big-box-1",
      id: null,
    },
    {
      url: "https://breedtrak.herokuapp.com/",
      title: "Heat",
      github: "https://github.com/RauchDavis13/BitchTrak",
      class: "big-box-2",
      id: null,
    },
  ];

  return (
    <>
      <section
        className="d-flex justify-content-center"
        id="header-img-partial"
      ></section>
      <h2 className="d-flex justify-content-center" id="work-title">
        Projects
      </h2>
      <section id="work">
        <div class="column"></div>
        <div id="work-imgs-container" class="main-section-content">
          {projectArr.map((work) => {
            return <Projectlist work={work} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
