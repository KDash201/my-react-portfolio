import React from "react";
// import GitHub from "../../assets/images/GitHub/GitHub_Logo.png";
// import LinkedIn from "../../assets/images/LinkedIn/LI-Logo.png";

// import { validateEmail } from "../../utils/helpers";

function Footer(props) {
  return (
    <div class="footer-basic" id="contact-me">
      <footer>
        <div class="column"></div>
        <div class="social">
          <a
            href="https://www.linkedin.com/in/k-von-madison/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="icon ion-social-linkedin"></i>
          </a>
          <a
            href="https://github.com/KDash201"
            target="_blank"
            rel="noreferrer"
          >
            <i class="icon ion-social-github"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li>
            <a href="mailto:kvonmadison@Yahoo.com">Email</a>
          </li>
          {/* <br /> */}
          {/* <li>Cell: 555.555.5555/li> */}
        </ul>
        <p class="copyright">Professional Portfolio © 2022</p>
      </footer>
    </div>
  );
}

export default Footer;
