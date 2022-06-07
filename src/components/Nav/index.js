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
        className={currentTab === "About" ? "active-page" : "inactive-page"}
        href="#About"
        onClick={() => {
          setCurrentTab("About");
        }}
      >
        About Me
      </a>
      <a
        className={currentTab === "Portfolio" ? "active-page" : "inactive-page"}
        href="#Portfolio"
        onClick={() => {
          setCurrentTab("Portfolio");
        }}
      >
        Portfolio
      </a>

      <a
        className={currentTab == "Resume" ? "active-page" : "inactive-page"}
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
