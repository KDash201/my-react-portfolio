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

  return (
    <div>
      <Header
        tabOptions={tabOptions}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      ></Header>

      <main>
        <About />
        {<button onClick={() => setIsToggled(!isToggled)}>Toggle</button>}
        {isToggled && <Project />}
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
