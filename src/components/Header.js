import React from "react";

const Header = () => {
  return (
    <div className="slider-area ">
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
                    Having decade of experience in Software Industry and
                    passionate to solve hard problems. I have worked with wide
                    variety of clients (Startups, Enterprises) as a Developer,
                    Tech Lead, Devops / Infra Engineer. I love to automate
                    things and highly aligned towards Infrastructure as code.
                  </p>
                  {/* <!-- Hero-btn --> */}
                  <div className="hero__btn">
                    <a
                      href="industries.html"
                      className="btn hero-btn"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    >
                      Learn More
                    </a>
                    <a
                      href="industries.html"
                      className="btn border-btn ml-15"
                      data-animation="fadeInRight"
                      data-delay="1.0s"
                    >
                      Hire Me
                    </a>
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
