import React from "react";
import { Repo } from "../../../gatsby-graphql";
import Card from "./Card";
import { filterProjects, getSelectedProject, sortProjects } from "../../utils/projects";
import styled from "styled-components";
import PropTypes from "prop-types";
import { repoType } from "../../types/projects";
import selectedProjects from "../../data/projects";

const ProjectsWrapper = styled.section`
  margin-top: 60px;
`;

interface ProjectsListProps {
  repos: repoType[];
  selectValue: string;
}

const ProjectsList = ({ repos, selectValue }: ProjectsListProps) => {
  return (
    <ProjectsWrapper>
      {sortProjects(filterProjects(repos, selectedProjects), selectValue).map(({ id, ...repo }) => (
        <Card key={id} repo={getSelectedProject(repo, selectedProjects)} />
      ))}
    </ProjectsWrapper>
  );
};

ProjectsList.propTypes = { repos: PropTypes.array.isRequired, selectValue: PropTypes.string.isRequired };

export default ProjectsList;
