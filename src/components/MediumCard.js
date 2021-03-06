import React from "react";
import { Card, CardBody } from "shards-react";
import ShortenText from "../utils/ShortenText";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToText from "../utils/Totext";

export default function MediumCard(props) {
  var shortMonthName = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format;
  let date = new Date(props.pubDate);
  const publishDate =
    shortMonthName(date) +
    " " +
    date.getDate() +
    "," +
    " " +
    date.getFullYear();
  return (
    <Card className="card-post card-post--1">
      <div
        className="card-post__image"
        style={{ backgroundImage: `url(${props.thumbnail})` }}
      >
        <div className="card-post__author d-flex">
          <a
            href={props.profilelink}
            target="_blank"
            className="card-post__author-avatar card-post__author-avatar--small"
            style={{
              backgroundImage: `url(${props.avatar})`,
            }}
            rel="noopener noreferrer"
          >
            Written by {props.author}
          </a>
        </div>
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
        <p className="card-text d-inline-block mb-3">
          {ShortenText(ToText(props.content), 0, 70) + "..."}
        </p>
        <br />
        <span className="text-muted">
          <FontAwesomeIcon icon={faCalendarAlt} /> {publishDate}
        </span>
      </CardBody>
    </Card>
  );
}
