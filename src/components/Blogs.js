import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col } from "shards-react";
import MediumCard from "./MediumCard";
import GithubCard from "./GithubCard";
import ProjectCard from "./ProjectCard";

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
  const [setActiveTab] = useState("Medium Blogs");

  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@worldofprasanna";

  const githubRepos = [
    "worldofprasanna/showcase-terraform-k8s",
    "worldofprasanna/terraform-aws-staticwebsite",
    "worldofprasanna/github-stats",
  ];

  const projectData = [
    {
      title: "Ticket Medium",
      link: "https://ticketmedium.com",
      description:
        "Create your favorite events from Conferences, Hackathons, Music festivals, conventions, pop-up dinners to Weekend photography/cooking",
      image_src: "https://ticketmedium.com/img/logo_1.d16ec1a8.png",
    },
  ];

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
  }, []);

  return (
    <section className="services-area services-padding pt-0">
      <div className="container">
        <div className="project-heading mb-35">
          <div className="row align-items-end">
            <div className="col-lg-12">
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
                      id="nav-blog-tab"
                      data-toggle="tab"
                      href="#nav-blog"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="false"
                      onClick={() => setActiveTab("Medium Blogs")}
                    >
                      {" "}
                      Blogs
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-github-tab"
                      data-toggle="tab"
                      href="#nav-github"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      onClick={() => setActiveTab("Github Repos")}
                    >
                      {" "}
                      Github Code
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-project-tab"
                      data-toggle="tab"
                      href="#nav-project"
                      role="tab"
                      aria-controls="nav-project"
                      aria-selected="false"
                      onClick={() => setActiveTab("Projects")}
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
        <div className="row">
          <div className="col-12">
            <div className="tab-content active" id="nav-tabContent">
              <div
                className="tab-pane fade active show"
                id="nav-blog"
                role="tabpanel"
                aria-labelledby="nav-blog-tab"
              >
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
              <div
                className="tab-pane fade show"
                id="nav-github"
                role="tabpanel"
                aria-labelledby="nav-github-tab"
              >
                <div className="latest-blog-area">
                  <div className="container">
                    <div className="custom-row">
                      <div className="blog-active">
                        <div className="blog__slider">
                          <Slider {...settings}>
                            {githubRepos.map((repo, i) => (
                              <Col key={i} className="mb-4">
                                <GithubCard repo={repo} index={i} />
                              </Col>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show"
                id="nav-project"
                role="tabpanel"
                aria-labelledby="nav-project-tab"
              >
                <div className="latest-blog-area">
                  <div className="container">
                    <div className="custom-row">
                      <div className="blog-active">
                        <div className="blog__slider">
                          <Slider {...settings} infinite={false}>
                            {projectData.map((data) => (
                              <Col key={data.title} className="mb-4">
                                <ProjectCard {...data} />
                              </Col>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
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
