import React from "react";

const Services = () => {
  return (
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
                  <a href="services.html">Devops</a>
                </h5>
                <p>
                  Proficient in setting up CI/CD using variety of tools (Jenkins, CircleCI, Gitlab CI), Configuration Management tools (Ansible), Containers & Orchestration tools (Kubernetes)
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
                  <a href="services.html">Cloud / Infrastructure</a>
                </h5>
                <p>
                Highly skilled in working with cloud environment (AWS, GCP, Digital Ocean, Heroku (Paas)). Extensively used Datadog, Prometheus, Cloudwatch to monitor various components of the Infrastructure
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
                  <a href="services.html">Backend Developer</a>
                </h5>
                <p>
                  Comfortable with multiple tech stacks (Ruby on Rails, Scala) and has good experience in working with Distributed data Systems (Kafka, Cassandra, Flink, Spark)
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
