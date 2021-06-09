import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import { AllRepoQuery } from "../../gatsby-graphql";

const ProjectsWrapper = styled.div``;

interface projectsProps {
  data: AllRepoQuery;
}

const projects = ({
  data: {
    allRepo: { nodes: repos },
  },
}: projectsProps) => {
  console.log(repos);
  return (
    <ProjectsWrapper>
      <PageTitle>projects</PageTitle>
    </ProjectsWrapper>
  );
};

projects.propTypes = {};

export default projects;

export const query = graphql`
  query allRepo {
    allRepo {
      nodes {
        name
        created_at(fromNow: true)
        description
        forks_count
        html_url
        stargazers_count
        language
        homepage
      }
    }
  }
`;
