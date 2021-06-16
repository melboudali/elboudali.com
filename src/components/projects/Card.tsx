import React from "react";
import { cardRepoType, fullCardRepoType } from "../../types/projects";
import PropTypes from "prop-types";
import { getSelectedProject } from "../../utils/projects";
import selectedProjects from "../../data/projects";
import { StaticImage, GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { CoverQuery } from "../../../gatsby-graphql";

interface CardProps {
  repo: fullCardRepoType;
}

const Card = ({ repo }: CardProps) => {
  const { cover }: CoverQuery = useStaticQuery(graphql`
    query cover {
      cover: file(relativePath: { eq: "elboudali.com/cover.png" }) {
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <div>
      {repo.name} - {repo.fromNow} - {repo.stargazers_count}
      {cover && cover.childrenImageSharp && cover.childrenImageSharp[0] && (
        <GatsbyImage image={getImage(cover.childrenImageSharp[0].gatsbyImageData)!} alt="EL BOUDALI" className="my_image" />
      )}
    </div>
  );
};

Card.propTypes = {};

export default Card;
