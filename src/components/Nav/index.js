import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav({ currentTab, setCurrentTab }) {
  // const {
  //   tabOptions = [],
  //   setCurrentTab,
  //   currentTab,
  //   contactSelected,
  //   setContactSelected,
  // } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentTab.name);
  // }, [currentTab]);

  return (
    <nav>
      <a
        className={currentTab == "About" ? "active-page" : "inactive-page"}
        href="#"
        onClick={() => {
          setCurrentTab("About");
        }}
      >
        About Me
      </a>
      <a
        className={currentTab == "Portfolio" ? "active-page" : "inactive-page"}
        href="#"
        onClick={() => {
          setCurrentTab("Portfolio");
        }}
      >
        Portfolio
      </a>
      <a
        className={currentTab == "Resume" ? "active-page" : "inactive-page"}
        href="#"
        onClick={() => {
          setCurrentTab("Resume");
        }}
      >
        Resume
      </a>
      <a
        className={currentTab == "Contact" ? "active-page" : "inactive-page"}
        href="#"
        onClick={() => {
          setCurrentTab("Contact");
        }}
      >
        Contact Me
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
