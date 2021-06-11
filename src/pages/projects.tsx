import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import PageTitle from "../components/common/PageTitle";
import { AllRepoQuery } from "../../gatsby-graphql";
import projectsList from "../data/projects";
import PropTypes from "prop-types";
import { getAllReposStars } from "../utils/projects";

const ProjectsWrapper = styled.div``;

const PageTitleWrapper = styled.section`
  display: flex;
`;

const SortWrapperTextStyle = css`
  font-size: 0.8125rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  font-weight: bold;
`;

const SortWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    color: #a5a5a5;
    ${SortWrapperTextStyle}
  }
  select {
    border: none;
    option {
      color: #000000;
      ${SortWrapperTextStyle}
    }
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
            <option value="startDateDesc" selected>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.90627 12.1875H7.03127C6.90695 12.1875 6.78773 12.2369 6.69982 12.3248C6.61191 12.4127 6.56252 12.5319 6.56252 12.6562V13.5938C6.56252 13.7181 6.61191 13.8373 6.69982 13.9252C6.78773 14.0131 6.90695 14.0625 7.03127 14.0625H8.90627C9.03059 14.0625 9.14982 14.0131 9.23773 13.9252C9.32564 13.8373 9.37502 13.7181 9.37502 13.5938V12.6562C9.37502 12.5319 9.32564 12.4127 9.23773 12.3248C9.14982 12.2369 9.03059 12.1875 8.90627 12.1875ZM5.15627 10.3125H3.75002V1.40625C3.75002 1.28193 3.70064 1.1627 3.61273 1.07479C3.52482 0.986886 3.40559 0.9375 3.28127 0.9375H2.34377C2.21945 0.9375 2.10022 0.986886 2.01232 1.07479C1.92441 1.1627 1.87502 1.28193 1.87502 1.40625V10.3125H0.468773C0.0530499 10.3125 -0.157302 10.8176 0.138011 11.1126L2.48176 13.9251C2.56966 14.0129 2.68884 14.0623 2.81311 14.0623C2.93738 14.0623 3.05656 14.0129 3.14446 13.9251L5.48821 11.1126C5.78176 10.8182 5.57288 10.3125 5.15627 10.3125ZM12.6563 4.6875H7.03127C6.90695 4.6875 6.78773 4.73689 6.69982 4.82479C6.61191 4.9127 6.56252 5.03193 6.56252 5.15625V6.09375C6.56252 6.21807 6.61191 6.3373 6.69982 6.42521C6.78773 6.51311 6.90695 6.5625 7.03127 6.5625H12.6563C12.7806 6.5625 12.8998 6.51311 12.9877 6.42521C13.0756 6.3373 13.125 6.21807 13.125 6.09375V5.15625C13.125 5.03193 13.0756 4.9127 12.9877 4.82479C12.8998 4.73689 12.7806 4.6875 12.6563 4.6875ZM10.7813 8.4375H7.03127C6.90695 8.4375 6.78773 8.48689 6.69982 8.57479C6.61191 8.6627 6.56252 8.78193 6.56252 8.90625V9.84375C6.56252 9.96807 6.61191 10.0873 6.69982 10.1752C6.78773 10.2631 6.90695 10.3125 7.03127 10.3125H10.7813C10.9056 10.3125 11.0248 10.2631 11.1127 10.1752C11.2006 10.0873 11.25 9.96807 11.25 9.84375V8.90625C11.25 8.78193 11.2006 8.6627 11.1127 8.57479C11.0248 8.48689 10.9056 8.4375 10.7813 8.4375ZM14.5313 0.9375H7.03127C6.90695 0.9375 6.78773 0.986886 6.69982 1.07479C6.61191 1.1627 6.56252 1.28193 6.56252 1.40625V2.34375C6.56252 2.46807 6.61191 2.5873 6.69982 2.67521C6.78773 2.76311 6.90695 2.8125 7.03127 2.8125H14.5313C14.6556 2.8125 14.7748 2.76311 14.8627 2.67521C14.9506 2.5873 15 2.46807 15 2.34375V1.40625C15 1.28193 14.9506 1.1627 14.8627 1.07479C14.7748 0.986886 14.6556 0.9375 14.5313 0.9375V0.9375Z"
                  fill="black"
                />
              </svg>
              start date
            </option>
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
