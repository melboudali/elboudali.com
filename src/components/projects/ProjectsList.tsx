import React from "react";
import { AllImagesQuery } from "../../../gatsby-graphql";
import Card from "./Card";
import { filterProjects, getSelectedProject, sortProjects } from "../../utils/projects";
import styled from "styled-components";
import PropTypes from "prop-types";
import { repoType } from "../../types/projects";
import selectedProjects from "../../data/projects";
import { graphql, useStaticQuery } from "gatsby";

const ProjectsWrapper = styled.section`
  --columnWidth: 1fr;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, var(--columnWidth));
  grid-gap: 37px;
  margin-top: 50px;
  @media (min-width: 370px) {
    --columnWidth: 370px;
  }
`;

interface ProjectsListProps {
  repos: repoType[];
  selectValue: string;
}

const ProjectsList = ({ repos, selectValue }: ProjectsListProps) => {
  const {
    allImages: { nodes: covers },
  }: AllImagesQuery = useStaticQuery(graphql`
    query allImages {
      allImages: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  return (
    <ProjectsWrapper>
      {sortProjects(filterProjects(repos, selectedProjects), selectValue).map(({ id, ...repo }) => (
        <Card key={id} repo={getSelectedProject(repo, selectedProjects)} covers={covers} />
      ))}
    </ProjectsWrapper>
  );
};

ProjectsList.propTypes = { repos: PropTypes.array.isRequired, selectValue: PropTypes.string.isRequired };

export default ProjectsList;
