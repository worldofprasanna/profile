import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    prevArrow: (
      <button type="button" className="slick-prev">
        <i className="ti-angle-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <i className="ti-angle-right"></i>
      </button>
    ),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="client-comments section-paddingt30">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-tittle mb-70">
              <h2>Some Possitive Feedback That Encourage Us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-blog-area">
        <div className="container">
          <div className="custom-row">
            <div className="blog-active">
              <Slider {...settings}>
                <div className="col-xl-12">
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
                        incididunt utore etstes dolore magna aliqua. Ut imminim
                        restai veniam, quis nostrud.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
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
                        incididunt utore etstes dolore magna aliqua. Ut imminim
                        restai veniam, quis nostrud.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
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
                        incididunt utore etstes dolore magna aliqua. Ut imminim
                        restai veniam, quis nostrud.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
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
                        incididunt utore etstes dolore magna aliqua. Ut imminim
                        restai veniam, quis nostrud.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
