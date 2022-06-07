import React from "react";
import GitHub from "../../assets/images/GitHub/GitHub_Logo.png";
import LinkedIn from "../../assets/images/LinkedIn/LI-Logo.png";

// import { validateEmail } from "../../utils/helpers";

function Footer() {
  return (
    <div class="footer-basic" id="contact-me">
      <footer>
        <div class="column">
          <div class="social">
            <a href="https://github.com/KDash201">
              <img src={GitHub} alt="GitHub icon" />
              {/* target="_blank" rel="noreferrer" >
              <i class="icon ion-social-instagram"></i> */}
            </a>
            <a href="https://www.linkedin.com/in/k-von-madison/">
              <img src={LinkedIn} alt="LinkedIn icon" />
              {/* 
              target="_blank"
              rel="noreferrer" */}

              <i class="icon ion-social-linkedin"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li>
              <a href="mailto:kvonmadison@Yahoo.com">Email</a>
            </li>
          </ul>
          <p class="copyright">Professional Portfolio © 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
