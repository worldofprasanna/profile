import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MediumCard from "./MediumCard";
import { Col } from "shards-react";

const Blogs = () => {
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
  const [posts, setPosts] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [profilelink, setProfilelink] = useState("");

  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@worldofprasanna";

  useEffect(() => {
    fetch(mediumURL)
      .then((res) => res.json())
      .then((data) => {
        setAvatar(data.feed.image);
        setProfilelink(data.feed.link);
        const res = data.items;
        const fetchedPosts = res.filter((item) => item.categories.length > 0);
        setPosts(fetchedPosts);
      });
  });

  return (
    <section className="services-area  services-padding">
      <div className="container">
        <div className="project-heading mb-35">
          <div className="row align-items-end">
            <div className="col-lg-6">
              {/* <!-- Section Tittle --> */}
              <div className="section-tittle">
                <h2>Few of my contributions</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="properties__button">
                {/* <!--Nav Button  -->*/}
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
                      Blogs
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
                      Github Code
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
                      Projects
                    </a>
                  </div>
                </nav>
                {/* <!--End Nav Button  --> */}
              </div>
            </div>
          </div>
        </div>
        <div className="latest-blog-area">
          <div className="container">
            <div className="custom-row">
              <div className="blog-active">
                <div className="blog__slider">
                  <Slider {...settings}>
                    {posts.map((item) => (
                      <Col key={item.title} className="mb-4">
                        <MediumCard
                          {...item}
                          avatar={avatar}
                          profilelink={profilelink}
                        />
                      </Col>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
