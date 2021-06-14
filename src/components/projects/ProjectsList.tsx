import React from "react";
import { Repo } from "../../../gatsby-graphql";
import Card from "./Card";
import { sortProjects } from "../../utils/projects";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProjectsWrapper = styled.section`
  margin-top: 60px;
`;

interface ProjectsListProps {
  repos: (Pick<Repo, "id" | "name" | "description" | "forks_count" | "stargazers_count" | "html_url" | "language" | "homepage" | "created_at"> & {
    fromNow: Repo["created_at"];
  })[];
  selectValue: string;
}

const ProjectsList = ({ repos, selectValue }: ProjectsListProps) => {
  return (
    <ProjectsWrapper>
      {sortProjects(repos, selectValue).map(({ id, ...repo }) => (
        <Card key={id} repo={repo} />
      ))}
    </ProjectsWrapper>
  );
};

ProjectsList.propTypes = { repos: PropTypes.array.isRequired, selectValue: PropTypes.string.isRequired };

export default ProjectsList;
