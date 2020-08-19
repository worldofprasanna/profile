import React from "react";

const About = () => {
  return (
    <section className="about-area section-paddingt30">
      <div className="container">
        <div className="row ">
          <div className="col-lg-5">
            <div className="about-caption mb-50">
              <h3>Designing With Passion While Exploring The World.</h3>
              <p className="pera1">
                Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
                Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
                lacus.
              </p>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
                labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="about-caption2">
              <h3>
                Any Type Of Query
                <br /> & Discussion.
              </h3>
              <p>Late talk with me</p>
              <div className="send-cv">
                <a href="/">hire@colorlib.com</a>
                <i className="ti-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
