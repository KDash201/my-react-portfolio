import React from "react";
// import GitHub from "../../assets/images/GitHub/GitHub_Logo.png";
// import LinkedIn from "../../assets/images/LinkedIn/LI-Logo.png";

// import { validateEmail } from "../../utils/helpers";

function Footer(props) {
  return (
    <div classname="footer-basic" id="contact-me">
      <footer>
        <div classname="column"></div>
        <div classname="social">
          <a
            href="https://www.linkedin.com/in/k-von-madison/"
            target="_blank"
            rel="noreferrer"
          >
            <i classname="icon ion-social-linkedin"></i>
          </a>
          <a
            href="https://github.com/KDash201"
            target="_blank"
            rel="noreferrer"
          >
            <i classname="icon ion-social-github"></i>
          </a>
        </div>
        <ul classname="list-inline">
          <li>
            <a href="mailto:kvonmadison@Yahoo.com">Email</a>
          </li>
          {/* <br /> */}
          {/* <li>Cell: 555.555.5555/li> */}
        </ul>
        <p classname="copyright">Professional Portfolio © 2022</p>
      </footer>
    </div>
  );

  // return (
  //   <div classname="footer-basic" id="contact-me">
  //     <footer>
  //       <div classname="column">
  //         <div classname="social">
  //           <a href="https://github.com/KDash201">
  //             <img src={GitHub} alt="GitHub icon" />
  //             {/* target="_blank" rel="noreferrer" >
  //             <i classname="icon ion-social-instagram"></i> */}
  //           </a>
  //           <a href="https://www.linkedin.com/in/k-von-madison/">
  //             <img src={LinkedIn} alt="LinkedIn icon" />

  //             target="_blank"
  //             rel="noreferrer"

  //             <i classname="icon ion-social-linkedin"></i>
  //           </a>
  //         </div>
  //         <ul classname="list-inline">
  //           <li>
  //             <a href="mailto:kvonmadison@Yahoo.com">Email</a>
  //           </li>
  //         </ul>
  //         <p classname="copyright">Professional Portfolio © 2022</p>
  //       </div>
  //     </footer>
  //   </div>
  // );
}

export default Footer;
