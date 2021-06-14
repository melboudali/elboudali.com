import React from "react";
import { Repo } from "../../../gatsby-graphql";
import PropTypes from "prop-types";

interface CardProps {
  repo: Pick<Repo, "name" | "description" | "forks_count" | "stargazers_count" | "html_url" | "language" | "homepage" | "created_at"> & {
    fromNow: Repo["created_at"];
  };
}

const Card = ({ repo }: CardProps) => {
  return (
    <div>
      {repo.name} - {repo.fromNow} - {repo.stargazers_count}
    </div>
  );
};

Card.propTypes = {};

export default Card;
