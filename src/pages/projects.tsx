import React, { useState } from "react";
import { graphql } from "gatsby";
import { AllRepoQuery } from "../../gatsby-graphql";
import PageTitle from "../components/common/PageTitle";
import ProjectsList from "../components/projects/ProjectsList";
import MoreProjectsLink from "../components/projects/MoreProjectsLink";
import { getAllReposStars, sortProjects } from "../utils/projects";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ProjectsWrapper = styled.div``;

const FlexStyle = css`
  display: flex;
  align-items: center;
`;

const SortAndStarsWrapper = styled.section`
  ${FlexStyle}
  justify-content: space-between;
  margin-top: 15px;
`;

const SortWrapperTextStyle = css`
  font-size: 0.8125rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  font-weight: bold;
`;

const DescriptiveText = css`
  ${SortWrapperTextStyle}
  color: var(--secondaryColor);
  margin: 0;
`;

const SortWrapper = styled.div`
  ${FlexStyle}
  gap: 10px;
  p {
    ${DescriptiveText}
  }
  select {
    ${SortWrapperTextStyle}
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 2px 3px;
    color: var(--selectColot);
    background-color: ${({ theme }) => theme.selectBackground};
    border: none;
    option {
      ${SortWrapperTextStyle}
    }
  }
`;

const TotalStarsWrapper = styled.div`
  ${FlexStyle}
  gap: 5px;
  p {
    ${DescriptiveText}
  }
`;

const StarsWrapper = styled.div`
  ${FlexStyle}
  gap: 2px;
  span {
    ${SortWrapperTextStyle}
    color: ${({ theme }) => theme.starsColor}
  }
  svg {
    stroke: ${({ theme }) => theme.starsColor};
    stroke-width: 1.5;
    stroke-linejoin: round;
    transform: translateY(-1px);
  }
`;

interface ProjectsProps {
  data: AllRepoQuery;
}

const Projects = ({
  data: {
    allRepo: { nodes: repos, totalCount },
  },
}: ProjectsProps) => {
  const [selectValue, setSelectValue] = useState("startDateDesc");

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  return (
    <ProjectsWrapper>
      <PageTitle ItemsCountNumber={totalCount}>projects</PageTitle>
      <SortAndStarsWrapper>
        <SortWrapper>
          <p>sort by:</p>
          <select defaultValue={selectValue} onChange={onChange}>
            <option value="created_at">📅 start date</option>
            <option value="stargazers_count">⭐ stars</option>
          </select>
        </SortWrapper>
        <TotalStarsWrapper>
          <p>total stars:</p>
          <StarsWrapper>
            <span>{getAllReposStars(repos)}</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0625 6.09375H9.02344L7.5 1.40625L5.97656 6.09375H0.9375L5.03906 8.90625L3.45703 13.5938L7.5 10.6641L11.543 13.5938L9.96094 8.90625L14.0625 6.09375Z" />
            </svg>
          </StarsWrapper>
        </TotalStarsWrapper>
      </SortAndStarsWrapper>
      <ProjectsList repos={repos} selectValue={selectValue} />
      <MoreProjectsLink />
    </ProjectsWrapper>
  );
};

Projects.propTypes = {};

export default Projects;

export const query = graphql`
  query AllRepo {
    allRepo {
      nodes {
        id
        name
        description
        forks_count
        stargazers_count
        html_url
        language
        homepage
        created_at
        pushed_at
      }
      totalCount
    }
  }
`;
