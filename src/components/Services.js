import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <section className="categories-area section-padding3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <!-- Section Tittle --> */}
            <div className="section-tittle mb-70">
              <h2>Reach out to me for,</h2>
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
                  <Link style={{ cursor: "pointer" }}>Devops</Link>
                </h5>
                <p>
                  Proficient in setting up CI/CD using variety of tools
                  (Jenkins, CircleCI, Gitlab CI), Configuration Management tools
                  (Ansible), Containers & Orchestration tools (Kubernetes)
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
                  <Link style={{ cursor: "pointer" }}>
                    Cloud / Infrastructure
                  </Link>
                </h5>
                <p>
                  Highly skilled in working with cloud environment (AWS, GCP,
                  Digital Ocean, Heroku (Paas)). Extensively used Datadog,
                  Prometheus, Cloudwatch to monitor various components of the
                  Infrastructure
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
                  <Link style={{ cursor: "pointer" }}>Backend Developer</Link>
                </h5>
                <p>
                  Comfortable with multiple tech stacks (Ruby on Rails, Scala)
                  and has good experience in working with Distributed Systems &
                  Streaming Data Analytics (Kafka, Cassandra, Flink, Spark)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
