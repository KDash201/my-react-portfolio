import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import "./style.css";

function Nav({ currentTab, setCurrentTab }) {
  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentTab);
  // }, [currentTab]);

  return (
    <nav>
      <a
        className={currentTab === "About" ? "active-page" : "inactive-page"}
        href="#About"
        onClick={() => {
          setCurrentTab("About");
        }}
      >
        About Me
      </a>
      <a
        className={currentTab === "Projects" ? "active-page" : "inactive-page"}
        href="#Projects"
        onClick={() => {
          setCurrentTab("Projects");
        }}
      >
        Projects
      </a>

      <a
        className={currentTab === "Resume" ? "active-page" : "inactive-page"}
        href="#Resume"
        onClick={() => {
          setCurrentTab("Resume");
        }}
      >
        Resume
      </a>
    </nav>
  );
}

//       {tabOptions.map((tab) => (
//         <li
//           className={`mx-1 ${
//             currentTab.name === tab.name && !contactSelected && "navActive"
//           }`}
//           key={tab.name}
//         >
//           <span
//             onClick={() => {
//               setCurrentTab(tab);
//               setContactSelected(false);
//             }}
//           >
//             {capitalizeFirstLetter(tab.name)}
//           </span>
//         </li>
//       ))}
//     </nav>
//   );
// }

export default Nav;
