import React from "react";
import avi from "../../assets/images/avi.png";
import Nav from "../Navigation";

function Header(props) {
  return (
    <header className="flex-row">
      <h1>K-Von Madison</h1>

      <Nav
        tabOptions={props.tabOptions}
        setCurrentTab={props.setCurrentTab}
        currentTab={props.currentTab}
      />
      <img src={avi} className="my-2" style={{ width: "10%" }} alt="profile" />
    </header>
  );
}

export default Header;
