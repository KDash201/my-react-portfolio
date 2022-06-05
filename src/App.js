import React, { useState } from "react";
import Header from "./components/Header.js";
import Projects from "./components/Projects/index.js";
import About from "./components/About/index.js";
import Footer from "./components/Footer/index.js";
import Resume from "./components/Resume/index.js";
import Contact from "./components/Contact/index.js";

// import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState("About");

  function renderPage() {
    if (currentTab === "About") {
      return <About />;
    } else if (currentTab === "Projects") {
      return <Projects />;
    } else if (currentTab === "Resume") {
      return <Resume />;
    } else if (currentTab === "Contact") {
      return <Contact />;
    }
  }

  // const [isToggled, setIsToggled] = useState(false);

  // const [tabOptions] = useState(["Home", "About", "Contact Me", "Projects"]);
  // const [currentTab, setCurrentTab] = useState(tabOptions("Home"));

  // const [projectAvi] = useState([
  //   {
  //     name: "Run Buddy",
  //     language: "HTML & CSS",
  //   },
  //   {
  //     name: "Wet Nose Adoption",
  //     language: "HTML, CSS and Javascript",
  //   },
  // ]);

  // const [currentProjectAvi, setProjectAvi] = useState(projectAvi[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {/* tabOptions={tabOptions}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        projectAvi={projectAvi}
        currentProjectAvi={currentProjectAvi}
        setProjectAvi={setProjectAvi}
      ></Header> */}

      <main>
        {renderPage()}
        {/* {!contactSelected ? (
          <>
            <About />
            <Projects
              tabOptions={tabOptions}
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              projectAvi={projectAvi}
              currentProjectAvi={currentProjectAvi}
              setProjectAvi={setProjectAvi}
            ></Projects>
          </>
        ) : (
          <footer>
            <Footer />
          </footer>
        )} */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
