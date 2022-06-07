import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from "../Nav";

// import avi from "../../assets/images/avi.png";
// import Nav from "../Nav";

function Header({ currentTab, setCurrentTab }) {
  // const {
  //   tabOptions = [],
  //   setCurrentTab,
  //   currentTab,
  //   contactSelected,
  //   setContactSelected,
  // } = props;

  // // useEffect(() => {
  // //   document.title = capitalizeFirstLetter(currentTab.name);
  // // }, [currentTab]);

  return (
    <header>
      <a
        id="title-name"
        className={currentTab === "About" ? "active-page" : "inactive-page"}
        title-name
        href="#About"
        onClick={() => {
          setCurrentTab("About");
        }}
      >
        K-Von Madison
      </a>
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </header>
  );
}

export default Header;
