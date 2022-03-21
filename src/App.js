import React, { useState } from "react";
import Header from "./components/Header.js";
import Project from "./components/Project/index.js";
import About from "./components/About/index.js";
import Footer from "./components/Footer/index.js";

// import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const [tabOptions] = useState(["Home", "About", "Contact Me", "Projects"]);
  const [currentTab, setCurrentTab] = useState(tabOptions[0]);

  const [projectAvi] = useState([
    {
      name: "Run Buddy",
      language: "HTML & CSS",
    },
    {
      name: "Wet Nose Adoption",
      language: "HTML, CSS and Javascript",
    },
  ]);

  const [currentProjectAvi, setProjectAvi] = useState(false);

  return (
    <div>
      <Header
        tabOptions={tabOptions}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      ></Header>

      <main>
        <About />
        <Project
          tabOptions={tabOptions}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          projectAvi={projectAvi}
          currentProjectAvi={currentProjectAvi}
          setProjectAvi={setProjectAvi}
        ></Project>

        {
          <footer>
            <Footer />
          </footer>
        }
      </main>
    </div>
  );
}

export default App;
