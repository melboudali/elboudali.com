import React from "react";
import { cardRepoType, fullCardRepoType } from "../../types/projects";
import PropTypes from "prop-types";
import { getSelectedProject } from "../../utils/projects";
import selectedProjects from "../../data/projects";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { File } from "../../../gatsby-graphql";

interface CardProps {
  repo: fullCardRepoType;
}

interface FileInt {
  file: File;
}

const Card = ({ repo }: CardProps) => {
  const { file }: FileInt = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "Instagram-Clone/cover.png" }) {
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <div>
      {repo.name} - {repo.fromNow} - {repo.stargazers_count}
      <GatsbyImage image={getImage(file.childImageSharp?.gatsbyImageData)!} alt="EL BOUDALI" className="my_image" />
      {/* <StaticImage src={file.} alt="EL BOUDALI" className="my_image" /> */}
    </div>
  );
};

Card.propTypes = {};

export default Card;
