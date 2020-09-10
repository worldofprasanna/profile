import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faDev,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const social_links = [
    { name: "medium", link: "https://bit.ly/2RUAMFh", icon: faMedium },
    { name: "linkedin", link: "https://bit.ly/2K6Uj0K", icon: faLinkedin },
    { name: "github", link: "https://bit.ly/2RCzka4", icon: faGithub },
    { name: "twitter", link: "https://bit.ly/2V9YcZb", icon: faTwitterSquare },
    { name: "devto", link: "http://bit.ly/worldofprasanna-dev", icon: faDev },
    {
      name: "facebook",
      link: "http://bit.ly/worldofprasanna-fb",
      icon: faFacebookSquare,
    },
  ];
  return (
    <footer>
      {/* <!-- Footer Start--> */}
      <div className="footer-area">
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="footer-top-cap text-center">
                  <img src="assets/img/logo/logo2_footer.png" alt="" />
                  <span className="flex-center-start justify-content-around">
                    {social_links.map((item) => (
                      <a href={item.link} key={item.name} className="mx-2">
                        <FontAwesomeIcon icon={item.icon} size="2x" />
                      </a>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-9 col-lg-8">
                <div className="footer-copy-right">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com">Colorlib</a> and customised in{" "}
                  <a href="https://reactjs.org/">ReactJS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End--> */}
    </footer>
  );
};

export default Footer;
