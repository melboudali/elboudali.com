import React from "react";
import { Repo } from "../../../gatsby-graphql";
import Card from "./Card";
import { filterProjects, getProjectCover, getSelectedProject, sortProjects } from "../../utils/projects";
import styled from "styled-components";
import PropTypes from "prop-types";
import { coverType, repoType } from "../../types/projects";
import selectedProjects from "../../data/projects";

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
  covers: coverType[];
  selectValue: string;
}

const ProjectsList = ({ repos, covers, selectValue }: ProjectsListProps) => {
  return (
    <ProjectsWrapper>
      {sortProjects(filterProjects(repos, selectedProjects), selectValue).map(({ id, ...repo }) => (
        <Card key={id} repo={getSelectedProject(repo, selectedProjects)} covers={covers} />
      ))}
    </ProjectsWrapper>
  );
};

ProjectsList.propTypes = { repos: PropTypes.array.isRequired, covers: PropTypes.array.isRequired, selectValue: PropTypes.string.isRequired };

export default ProjectsList;
