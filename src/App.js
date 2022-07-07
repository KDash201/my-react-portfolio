import React, { useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState("About");

  function renderPage() {
    if (currentTab === "About") {
      return <About />;
    } else if (currentTab === "Projects") {
      return <Projects />;
    } else if (currentTab === "Resume") {
      return <Resume />;
    }
  }

  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
