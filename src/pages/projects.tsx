import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import { AllRepoQuery } from "../../gatsby-graphql";
import projectsList from "../data/projects";
import PropTypes from "prop-types";
import { getAllReposStars } from "../utils/projects";

const ProjectsWrapper = styled.div``;

const PageTitleWrapper = styled.section`
  display: flex;
`;

const SortWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    letter-spacing: -0.04em;
    text-transform: uppercase;
    font-size: 0.8125rem;
    font-weight: bold;
    color: #a5a5a5;
  }
`;

const TotalStarsWrapper = styled.div``;

interface projectsProps {
  data: AllRepoQuery;
}

const projects = ({
  data: {
    allRepo: { nodes: repos },
  },
}: projectsProps) => {
  console.log(getAllReposStars(repos));
  return (
    <ProjectsWrapper>
      <PageTitle ItemsCountNumber={repos.length}>projects</PageTitle>
      <PageTitleWrapper>
        <SortWrapper>
          <p>sort by:</p>
          <select>
            <option value="startDateDesc">start date</option>
            <option value="starsDesc">stars</option>
          </select>
        </SortWrapper>
      </PageTitleWrapper>

      {repos
        // .filter(repo => repo.name === "Instagram-Clone" projectsList.map(project => project.name == repo.name))
        .map((repo, index) => (
          <p key={index}>
            {repo.name} {repo.stargazers_count}
          </p>
        ))}
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
