import React from "react";
import "./style.css";

function Nav({ currentTab, setCurrentTab }) {
  return (
    <nav>
      <a
        className={currentTab === "About" ? "active-page" : "inactive-page"}
        href="#About"
        onClick={() => {
          setCurrentTab("About");
        }}
      >
        About Me
      </a>
      <a
        className={currentTab === "Projects" ? "active-page" : "inactive-page"}
        href="#Projects"
        onClick={() => {
          setCurrentTab("Projects");
        }}
      >
        Projects
      </a>

      <a
        className={currentTab === "Resume" ? "active-page" : "inactive-page"}
        href="#Resume"
        onClick={() => {
          setCurrentTab("Resume");
        }}
      >
        Resume
      </a>
    </nav>
  );
}

export default Nav;
