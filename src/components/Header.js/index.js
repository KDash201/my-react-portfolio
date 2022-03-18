import React from "react";
import avi from "../../assets/images/avi.png";

function Header() {
  return (
    <section className="my-5">
      <h1 id="header">K-Von Madison</h1>
      <img src={avi} className="my-2" style={{ width: "10%" }} alt="profile" />
    </section>
  );
}

export default Header;
