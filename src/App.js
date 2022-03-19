import React, { useState } from "react";
import Header from "./components/Header.js";
import Nav from "./components/Navigation/index.js";
import Project from "./components/Project/index.js";
import About from "./components/About/index.js";

// import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <section>
      <Header></Header>
      <div>
        <Nav></Nav>
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        {isToggled && <Project />}
        {/* <Project /> */}
        <footer>
          <About />
        </footer>
      </div>
    </section>
  );
}

export default App;
