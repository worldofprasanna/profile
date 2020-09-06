import React from "react";
import Slider from "react-slick";

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    arrows: false,
    slidesToShow: 5,
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
        <div className="row">
          <div className="brand-active brand-border pt-50 pb-40">
            <div className="section-tittle">
              <h2>Experienced In</h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="single-brand">
            <img src="assets/img/tools/aws.png" alt="" />
          </div>
          <div className="single-brand">
            <img src="assets/img/tools/terraform.png" alt="" />
          </div>
          <div className="single-brand">
            <img src="assets/img/tools/jenkins.png" alt="" />
          </div>
          <div className="single-brand">
            <img src="assets/img/tools/k8s.png" alt="" />
          </div>
          <div className="single-brand">
            <img src="assets/img/tools/golang.png" alt="" />
          </div>
          <div className="single-brand">
            <img src="assets/img/tools/ansible.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Products;
