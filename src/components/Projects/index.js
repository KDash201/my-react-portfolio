import React from "react";
import Projectlist from "../Projectlist";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Projects(props) {
  const {
    tabOptions = [],
    setCurrentTab,
    currentTab,
    projectAvi = [],
    currentProjectAvi,
    setProjectAvi,
  } = props;

  return (
    <section>
      <h1 data-testid="h1tag">{tabOptions}</h1>
      <p>{currentTab}</p>
      <Projectlist
        projectAvi={projectAvi}
        currentProjectAvi={currentProjectAvi}
        setProjectAvi={setProjectAvi}
      ></Projectlist>
    </section>
  );
}

export default Projects;
