import React from "react";

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
      {/* <!-- Preloader Start --> */}
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
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="portfolio.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="/">Page</a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="blog_details.html">Blog Details</a>
                              </li>
                              <li>
                                <a href="elements.html">Element</a>
                              </li>
                              <li>
                                <a href="portfolio_details.html">
                                  Portfolio Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
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
      <main>
        {/* <!-- slider Area Start--> */}
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
                        passionate to solve hard problems. I have worked with
                        wide variety of clients (Startups, Enterprises) as a
                        Developer, Tech Lead, Devops / Infra Engineer. I love to
                        automate things and highly aligned towards
                        Infrastructure as code.
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
            {/* <!-- Single Slider --> */}
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="hero__caption">
                      <span data-animation="fadeInUp" data-delay=".4s">
                        Get Every Single Solutions.
                      </span>
                      <h1 data-animation="fadeInUp" data-delay=".6s">
                        I’m Designer Haris F. Watson
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".8s">
                        jhorem rfpsum golor sidt amet, consectetur adipiscing
                        elit, eiusmod tempor incididunt utcjhg labore bet dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
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
        {/* <!-- slider Area End--> */}
        {/* <!-- About Area start --> */}
        <section className="about-area section-paddingt30">
          <div className="container">
            <div className="row ">
              <div className="col-lg-5">
                <div className="about-caption mb-50">
                  <h3>Designing With Passion While Exploring The World.</h3>
                  <p className="pera1">
                    Consectetur adipiscing elit, sed do eiusmod tempor ididunt
                    ut labore et dolore magna aliqua. Quis ipsum suspendisces
                    gravida. Risus commodo viverra sebfd dho eiusmod tempor
                    maecenas accumsan lacus.
                  </p>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor ididunt
                    ut labore et dolore magna aliqua.{" "}
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
        {/* <!-- About Area End --> */}
        {/* <!-- Categories Area Start --> */}
        <section className="categories-area section-padding3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle mb-70">
                  <h2>What Services you will Get from me!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-pen"></span>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">UI/UX Design</a>
                    </h5>
                    <p>
                      Free resource that will help nderstand thecv designc
                      process and improve theroi nderstand the design process
                      andisei impro are of vquality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-speaker"></span>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Digital Marketing</a>
                    </h5>
                    <p>
                      Free resource that will help nderstand thecv designc
                      process and improve theroi nderstand the design process
                      andisei impro are of vquality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-portfolio"></span>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Website Design</a>
                    </h5>
                    <p>
                      Free resource that will help nderstand thecv designc
                      process and improve theroi nderstand the design process
                      andisei impro are of vquality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Categories Area End --> */}
        {/* <!-- Services Area Start --> */}
        <section className="services-area  services-padding">
          <div className="container">
            <div className="project-heading mb-35">
              <div className="row align-items-end">
                <div className="col-lg-6">
                  {/* <!-- Section Tittle --> */}
                  <div className="section-tittle">
                    <h2>What Services you will Get from me!</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="properties__button">
                    {/* <!--Nav Button  -->                                             */}
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          className="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="false"
                        >
                          {" "}
                          All
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          {" "}
                          Branding
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-contact-tab"
                          data-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Logo
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-last-tab"
                          data-toggle="tab"
                          href="#nav-last"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          UI/UX{" "}
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-technology"
                          data-toggle="tab"
                          href="#nav-techno"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Web Design
                        </a>
                      </div>
                    </nav>
                    {/* <!--End Nav Button  --> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* <!-- Nav Card --> */}
                <div className="tab-content active" id="nav-tabContent">
                  {/* <!-- card ONE --> */}
                  <div
                    className="tab-pane fade active show"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="services-caption">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className="row">
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services2.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services3.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services4.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services5.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services6.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card TWO --> */}
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="services-caption">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services6.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className="row">
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services2.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services3.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services4.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services5.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services1.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card THREE --> */}
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="services-caption">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services2.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className="row">
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services1.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services3.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services4.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services5.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services6.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- card FUR --> */}
                  <div
                    className="tab-pane fade"
                    id="nav-last"
                    role="tabpanel"
                    aria-labelledby="nav-last-tab"
                  >
                    <div className="services-caption">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className="row">
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services2.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services3.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services4.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services5.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services6.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- card FIVE --> */}
                  <div
                    className="tab-pane fade"
                    id="nav-techno"
                    role="tabpanel"
                    aria-labelledby="nav-technology"
                  >
                    <div className="services-caption">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services3.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <div className="row">
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services2.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              {/* <!-- Single --> */}
                              <div className="single-services mb-30">
                                <img
                                  src="assets/img/service/services1.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services4.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services5.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          {/* <!-- Single --> */}
                          <div className="single-services mb-30">
                            <img
                              src="assets/img/service/services6.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Nav Card --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Services Area End --> */}
        {/* <!-- Want To Work Start --> */}
        <section className="wantToWork-area w-padding2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <div className="wantToWork-caption wantToWork-caption2">
                  <h2>Dont worry for contact i`m available</h2>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <a href="/" className="btn btn-black f-right">
                  Contact Me Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Want To Work End --> */}

        {/* <!-- client-comments --> */}
        <section className="client-comments section-paddingt30">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-10">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle mb-70">
                  <h2>Some Possitive Feedback That Encourage Us</h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- latest-blog-area start --> */}
          <div className="latest-blog-area">
            <div className="container">
              <div className="custom-row">
                <div className="blog-active">
                  {/* <!-- single-items --> */}
                  <div className="col-xl-4">
                    <div className="blog-wrapper">
                      <div className="blog-inner">
                        <div className="blog-top">
                          <div className="person-img">
                            <img src="assets/img/gallery/blog1.png" alt="" />
                          </div>
                          <div className="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor
                          incididunt utore etstes dolore magna aliqua. Ut
                          imminim restai veniam, quis nostrud.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- single-items --> */}
                  <div className="col-xl-4">
                    <div className="blog-wrapper">
                      <div className="blog-inner">
                        <div className="blog-top">
                          <div className="person-img">
                            <img src="assets/img/gallery/blog2.png" alt="" />
                          </div>
                          <div className="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor
                          incididunt utore etstes dolore magna aliqua. Ut
                          imminim restai veniam, quis nostrud.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- single-items --> */}
                  <div className="col-xl-4">
                    <div className="blog-wrapper">
                      <div className="blog-inner">
                        <div className="blog-top">
                          <div className="person-img">
                            <img src="assets/img/gallery/blog3.png" alt="" />
                          </div>
                          <div className="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor
                          incididunt utore etstes dolore magna aliqua. Ut
                          imminim restai veniam, quis nostrud.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- single-items --> */}
                  <div className="col-xl-4">
                    <div className="blog-wrapper">
                      <div className="blog-inner">
                        <div className="blog-top">
                          <div className="person-img">
                            <img src="assets/img/gallery/blog2.png" alt="" />
                          </div>
                          <div className="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor
                          incididunt utore etstes dolore magna aliqua. Ut
                          imminim restai veniam, quis nostrud.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End latest-blog-area --> */}
        </section>
        {/* <!-- Brand Area Start --> */}
        <div className="brand-area pb-bottom">
          <div className="container">
            <div className="brand-active brand-border pt-50 pb-40">
              <div className="single-brand">
                <img src="assets/img/gallery/brand1.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="assets/img/gallery/brand2.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="assets/img/gallery/brand3.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="assets/img/gallery/brand4.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="assets/img/gallery/brand2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Brand Area End --> */}
        {/* <!-- Contact Info Start --> */}
        <section
          className="contact-info-area w-padding2"
          data-background="assets/img/gallery/section_bg04.jpg"
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-7">
                <div className="contact-caption mb-50">
                  <h3>If Not Now, When? Let’s Work Together!</h3>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor ididunt
                    ut labore et dolore magna aliqua. Quis ipsum suspendisces
                    gravida. Risus commodo viverra.
                  </p>
                  <img src="assets/img/gallery/sin.png" alt="" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <form action="#" className="contact-wrapper">
                  <input type="text" name="name" placeholder="Full Name" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                  ></textarea>
                  <button className="submit-btn2" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Contact Info End --> */}
      </main>
      <footer>
        {/* <!-- Footer Start--> */}
        <div className="footer-area">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="footer-top-cap text-center">
                    <img src="assets/img/logo/logo2_footer.png" alt="" />
                    <span>
                      <a href="/">hireme@portfolio.com</a>
                    </span>
                    <p>221B Baker Street, Post office Box 353 </p>
                    <p>Park Road, USA - 215431</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right">
                    {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com">Colorlib</a>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  {/* <!-- Footer Social --> */}
                  <div className="footer-social f-right">
                    <a href="/">Stay Connected</a>
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/">
                      <i className="fas fa-globe"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End--> */}
      </footer>
      {/* <!-- Scroll Up --> */}
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
