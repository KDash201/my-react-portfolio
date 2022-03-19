import React from "react";

function Nav() {
  return (
    <nav>
      <h2>
        <ul className="flex-row">
          <div>
            <li className="col-12 col-md-6 col-xl-3 mb-3">
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </div>
        </ul>
      </h2>
    </nav>
  );
}

export default Nav;
