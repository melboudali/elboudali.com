import React from "react";
import { Repo } from "../../../gatsby-graphql";
import Card from "./Card";
import { filterProjects, getProjectCover, getSelectedProject, sortProjects } from "../../utils/projects";
import styled from "styled-components";
import PropTypes from "prop-types";
import { coverType, repoType } from "../../types/projects";
import selectedProjects from "../../data/projects";
import { graphql, useStaticQuery } from "gatsby";

const ProjectsWrapper = styled.section`
  --columnWidth: 1fr;
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--columnWidth));
  grid-gap: 37px;
  justify-content: center;
  margin-top: 60px;
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
    allFile: { nodes: covers },
  } = useStaticQuery(graphql`
    query allImages {
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  console.log(covers);

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
