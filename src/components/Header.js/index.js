import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

import avi from "../../assets/images/avi.png";
// import Nav from "../Nav";

function Header(props) {
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
    <header className="d-flex">
      <div>
        <p> K-Von Madison</p>
        <img
          src={avi}
          className="my-2"
          style={{ width: "20%" }}
          alt="profile"
        />
      </div>
      <nav className="d-flex navBar justify-content-between flex-wrap">
        <a href="#home" onClick={() => setContactSelected(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setCurrentTab(true)}>
          About Me
        </a>
        <a href="#contact" onClick={() => setContactSelected(false)}>
          Contact Me
        </a>
        <a href="#projects" onClick={() => setCurrentTab(true)}>
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
      {/* <Nav
        tabOptions={tabOptions}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      /> */}
    </header>
  );
}

export default Header;
