import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    tabOptions = [],
    setCurrentTab,
    currentTab,
    contactSelected,
    setContactSelected,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentTab.name);
  // }, [currentTab]);

  return (
    <nav className="d-flex navBar justify-content-between flex-wrap">
      <a href="#home" onClick={() => setContactSelected(false)}>
        Home
      </a>
      <a href="#about" onClick={() => setCurrentTab(false)}>
        About Me
      </a>
      <a href="#contact" onClick={() => setContactSelected(true)}>
        Contact Me
      </a>
      <a href="#projects" onClick={() => setCurrentTab(false)}>
        Projects
      </a>

      {tabOptions.map((tab) => (
        <li
          className={`mx-1 ${
            currentTab.name === tab.name && !contactSelected && "navActive"
          }`}
          key={tab.name}
        >
          <span
            onClick={() => {
              setCurrentTab(tab);
              setContactSelected(false);
            }}
          >
            {capitalizeFirstLetter(tab.name)}
          </span>
        </li>
      ))}
    </nav>
  );
}

export default Nav;
