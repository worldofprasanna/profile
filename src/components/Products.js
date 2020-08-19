import React from "react";
import Slider from "react-slick";

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="brand-area pb-bottom">
      <div className="container">
        <div className="brand-active brand-border pt-50 pb-40">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
