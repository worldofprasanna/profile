import React from "react";
import { Card, CardBody } from "shards-react";
import ShortenText from "../utils/ShortenText";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = (props) => {
  // const [repoData, setRepoData] = useState("");

  // useEffect(() => {
  //   axios.get(`https://api.github.com/repos/${props.repo}`).then((data) => {
  //     setRepoData(data.data);
  //   });
  // }, [props.repo]);

  return (
    <Card className="card-post card-post--1">
      <div
        className="card-post__image"
        style={{
          backgroundImage: `url(${props.image_src})`,
          backgroundSize: "contain",
          backgroundColor: "antiquewhite",
        }}
      >
        {/* <div className="card-post__author d-flex">
          <a
            href="/"
            target="_blank"
            className="card-post__author-avatar card-post__author-avatar--small"
            style={{
              backgroundImage: `url(${repoData.owner.avatar_url})`,
            }}
            rel="noopener noreferrer"
          >
            Written by {repoData.owner.login}
          </a>
        </div> */}
      </div>
      <CardBody>
        <h5 className="card-title" style={{ height: "52px" }}>
          <a
            href={props.link}
            target="_blank"
            className="text-fiord-blue"
            rel="noopener noreferrer"
          >
            {ShortenText(props.title, 0, 50)}
          </a>
        </h5>
        <p className="card-text d-inline-block mb-3" style={{ height: "60px" }}>
          {ShortenText(props.description, 0, 60) + "..."}
        </p>
        <br />
        <div className="row justify-content-around">
          <a className="text-muted" href={props.link}>
            <FontAwesomeIcon icon={faGlobe} /> Visit
          </a>
          {/* <span className="text-muted">
            <FontAwesomeIcon icon={faCodeBranch} /> {repoData.forks_count}
          </span> */}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
