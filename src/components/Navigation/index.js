import React from "react";

function Nav2(props) {
  console.log(props);
  return (
    <nav>
      <ul className="flex-row">
        <ul className="mx-2">
          {/* <li className="col-12 col-md-6 col-xl-3 mb-3"> */}
          <a href="#home" onClick={() => props.setCurrentTab(false)}>
            Home
          </a>
          {/* </li> */}
          <li>
            <a href="#about" onClick={() => props.setCurrentTab(true)}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => props.setCurrentTab(true)}>
              Contact Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => props.setCurrentTab(true)}>
              Projects
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Nav2;
