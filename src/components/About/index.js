import React from "react";
import avi from "../../assets/images/Me/avi.png";
import "./style.css";

function About(props) {
  return (
    <>
      <section id="header-img">
        <h2>
          "Luck is just being prepared at all times, so when the door opens
          you're ready" - Ermias Asghedom
        </h2>
      </section>

      <section id="about">
        <div className="about-pic">
          <h2 id="about-title">About Me</h2>
          <img src={avi} alt="profile-pic" className="avi" />
        </div>
        <div class="column"></div>
        <div class="main-section-content">
          <p class="about-p">
            Inspiring React developer with a background in application security
            who enjoys being the anchor to web applications. Aside from coding,
            I have a deep appreciation for art which would include movies,
            music, and paintings.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
