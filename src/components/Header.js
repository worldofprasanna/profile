import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="slider-area">
      <div className="slider-active">
        {/* <!-- Single Slider --> */}
        <div className="single-slider slider-height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-8">
                <div className="hero__caption">
                  <span data-animation="fadeInUp" data-delay=".4s">
                    Devops / Infra / Backend Consultant
                  </span>
                  <h1 data-animation="fadeInUp" data-delay=".6s">
                    Hey I’m Prasanna
                  </h1>
                  <p data-animation="fadeInUp" data-delay=".8s">
                    <div>
                      Having decade of experience in Software Industry and
                      passionate to solve hard problems. I have worked with wide
                      variety of clients ranging Startups to Enterprises as a
                      Developer, Tech Lead, Devops / Infra Freelance Engineer.
                    </div>
                    <br />
                    <div>
                      I love to automate things and highly aligned towards
                      Infrastructure as code.
                    </div>
                  </p>
                  {/* <!-- Hero-btn --> */}
                  <div className="hero__btn">
                    <Link
                      to="categories-area"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-150}
                      className="btn btn-white"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="contact-info-area"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-150}
                      className="btn btn-white ml-30"
                    >
                      Hire Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
