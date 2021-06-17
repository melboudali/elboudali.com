import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { getProjectCover } from "../../utils/projects";
import { coverType, fullCardRepoType } from "../../types/projects";
import PropTypes from "prop-types";

interface CardProps {
  repo: fullCardRepoType;
  covers: coverType[];
}

const Card = ({ repo, covers }: CardProps) => {
  return (
    <div>
      {repo.name} - {repo.fromNow} - {repo.stargazers_count}
      <GatsbyImage image={getImage(getProjectCover(repo.project_cover, covers).childImageSharp.gatsbyImageData)!} alt={`${repo.name} cover`} />
    </div>
  );
};

Card.propTypes = {
  repo: PropTypes.object.isRequired,
  covers: PropTypes.array.isRequired,
};

export default Card;
