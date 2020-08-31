import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <header>
      {/* <!-- Header Start --> */}
      <div className="header-area">
        <div className="main-header  header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* <!-- Logo --> */}
              <div className="col-xl-2 col-lg-2 col-md-1">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  {/* <!-- Main-menu --> */}
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <Link
                            to="slider-area"
                            spy={true}
                            smooth={true}
                            duration={500}
                            style={{ cursor: "pointer" }}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="categories-area"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-150}
                            style={{ cursor: "pointer" }}
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="services-area"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-150}
                            style={{ cursor: "pointer" }}
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="client-comments"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-150}
                            style={{ cursor: "pointer" }}
                          >
                            Testimonial
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="contact-info-area"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-150}
                            style={{ cursor: "pointer" }}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right-btn f-right d-none d-xl-block ml-20">
                    <a href="/" className="btn header-btn">
                      Get Free Consultent
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Mobile Menu --> */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </header>
  );
};

export default NavBar;
