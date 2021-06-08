import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";

const ProjectsWrapper = styled.div``;

interface projectsProps {}

const projects = ({}: projectsProps) => {
  return (
    <ProjectsWrapper>
      <PageTitle>projects</PageTitle>
    </ProjectsWrapper>
  );
};

projects.propTypes = {};

export default projects;
