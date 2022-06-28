import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from "../Nav";
import "./style.css";

function Header({ currentTab, setCurrentTab }) {
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
