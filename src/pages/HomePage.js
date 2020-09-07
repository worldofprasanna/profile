import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/loder.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <NavBar />
      <main>
        <Header />

        <Services />

        <div className="container">
          <hr />
        </div>
        {/* <section className="wantToWork-area w-padding2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <div className="wantToWork-caption wantToWork-caption2">
                  <h2>Want to talk to me?</h2>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <a href="/" className="btn btn-black f-right">
                  Contact Me Here
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <Products />

        <div className="container">
          <hr />
        </div>

        <Blogs />

        <div className="container">
          <hr />
        </div>

        <Testimonials />

        <div className="container">
          <hr />
        </div>

        <Contact />
      </main>
      <Footer />

      <div id="back-top">
        <a title="Go to Top" href="/">
          {" "}
          <i className="fas fa-level-up-alt"></i>
        </a>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
