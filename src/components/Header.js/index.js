import React from "react";
import avi from "../../assets/images/avi.png";
import Nav from "../Navigation";

function Header(props) {
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
      <Nav
        tabOptions={props.tabOptions}
        setCurrentTab={props.setCurrentTab}
        currentTab={props.currentTab}
      />
    </header>
  );
}

export default Header;
