import React from "react";
import avi from "../../assets/images/Me/avi.png";
import "./style.css";

function About(props) {
  return (
    <>
      <section id="header-img">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis velit
          ac turpis elementum dignissim. Aliquam erat volutpat. Proin placerat.
        </h2>
      </section>

      <section id="about">
        <div className="about-pic">
          <h2 id="about-title">About Me</h2>
          <img src={avi} alt="profile-pic" className="avi" />
        </div>
        <div classname="column"></div>
        <div classname="main-section-content">
          <p classname="about-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
            velit ac turpis elementum dignissim. Aliquam erat volutpat. Proin
            placerat.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
