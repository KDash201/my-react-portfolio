import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  //   const {
  //     categories = [],
  //     setCurrentCategory,
  //     contactSelected,
  //     currentCategory,
  //     setContactSelected,
  //   } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => props.setCurrentTab(false)}
            >
              About me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
