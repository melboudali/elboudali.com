import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getProjectCover } from "../../utils/projects";
import { coverType, fullCardRepoType } from "../../types/projects";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
  box-shadow: 0px 2px 5px -1px rgba(50, 50, 93, 0.25), 0px 1px 3px -1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  .gatsby_image {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    vertical-align: middle;
  }
`;

const Details = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

interface CardProps {
  repo: fullCardRepoType;
  covers: coverType[];
}

const Card = ({
  repo: {
    name,
    description,
    forks_count,
    stargazers_count,
    html_url,
    language,
    homepage,
    created_at,
    project_title,
    project_cover,
    project_startDate,
    project_endDate,
    project_topis,
    project_figmaLink,
  },
  covers,
}: CardProps) => {
  return (
    <CardWrapper>
      <GatsbyImage image={getProjectCover(project_cover, covers).childImageSharp.gatsbyImageData} alt={`${name} cover`} className="gatsby_image" />
      <Details>
        <CardTitle>{project_title}</CardTitle>
      </Details>
    </CardWrapper>
  );
};

Card.propTypes = {
  repo: PropTypes.object.isRequired,
  covers: PropTypes.array.isRequired,
};

export default Card;
