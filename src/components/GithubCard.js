import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody } from "shards-react";
import ShortenText from "../utils/ShortenText";
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GithubCard = (props) => {
  const [repoData, setRepoData] = useState("");

  useEffect(() => {
    axios.get(`https://api.github.com/repos/${props.repo}`).then((data) => {
      setRepoData(data.data);
    });
  }, []);

  return !!repoData.name ? (
    <Card className="card-post card-post--1">
      <div
        className="card-post__image"
        style={{
          backgroundImage: `url(https://placeimg.com/640/480/tech/${props.index})`,
        }}
      >
        <div className="card-post__author d-flex">
          <a
            href={repoData.owner.html_url}
            target="_blank"
            className="card-post__author-avatar card-post__author-avatar--small"
            style={{
              backgroundImage: `url(${repoData.owner.avatar_url})`,
            }}
            rel="noopener noreferrer"
          >
            Written by {repoData.owner.login}
          </a>
        </div>
      </div>
      <CardBody>
        <h5 className="card-title" style={{ height: "52px" }}>
          <a
            href={repoData.html_url}
            target="_blank"
            className="text-fiord-blue"
            rel="noopener noreferrer"
          >
            {ShortenText(repoData.name, 0, 50)}
          </a>
        </h5>
        <p className="card-text d-inline-block mb-3" style={{ height: "60px" }}>
          {ShortenText(repoData.description, 0, 90) + "..."}
        </p>
        <br />
        <div className="row justify-content-around">
          <span className="text-muted">
            <FontAwesomeIcon icon={faStar} /> {repoData.stargazers_count}
          </span>
          <span className="text-muted">
            <FontAwesomeIcon icon={faCodeBranch} /> {repoData.forks_count}
          </span>
        </div>
      </CardBody>
    </Card>
  ) : null;
};

export default GithubCard;
