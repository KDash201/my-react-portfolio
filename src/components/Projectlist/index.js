import React, { useState } from "react";

function Projectlist() {
  const [projectAvi, setProjectAvi] = useState();
  const [projectphotos] = useState([
    {
      name: "Run Buddy",
      language: "HTML & CSS",
    },
    {
      name: "Wet Nose Adoption",
      language: "HTML, CSS and Javascript",
    },
  ]);

  const currentProjectPhotos = projectphotos.filter(
    (projectphoto) => projectphoto.name === projectphoto.name
  );

  return <div></div>;
}

export default Projectlist;
