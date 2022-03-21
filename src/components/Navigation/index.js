import React, { useEffect } from "react";

function Nav(props) {
  const { tabOptions = [], setCurrentTab, currentTab } = props;

  useEffect(() => {
    document.title = currentTab;
  }, [currentTab]);

  return (
    <nav className="d-flex navBar justify-content-between flex-wrap">
      <a href="#home" onClick={() => setCurrentTab(false)}>
        Home
      </a>
      <a href="#about" onClick={() => setCurrentTab(true)}>
        About
      </a>
      <a href="#contact" onClick={() => setCurrentTab(true)}>
        Contact Me
      </a>
      <a href="#projects" onClick={() => setCurrentTab(true)}>
        Projects
      </a>
    </nav>
  );
}

export default Nav;
