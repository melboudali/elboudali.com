import React, { useState } from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { filterProjects, getAllReposStars, getSelectedProject, sortProjects } from "../utils/projects";
import { AllReposAndAllImagesQuery } from "../../gatsby-graphql";
import PageTitle from "../components/common/PageTitle";
import MoreProjects from "../components/projects/MoreProjects";
import PropTypes from "prop-types";
import Seo from "../components/common/Seo";
import Card from "../components/projects/Card";
import selectedProjects from "../data/projects";

const FlexStyle = css`
  display: flex;
  align-items: center;
`;

const SortAndStarsWrapper = styled.section`
  ${FlexStyle}
  margin-top: 15px;
  justify-content: space-between;
`;

const SortWrapperTextStyle = css`
  font-size: 0.8125rem;
  font-weight: bold;
  line-height: 15px;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

const DescriptiveText = css`
  ${SortWrapperTextStyle}
  margin: 0;
  color: ${({ theme }) => theme.iconWithTitle};
`;

const SortWrapper = styled.div`
  ${FlexStyle}
  gap: 10px;
  p {
    ${DescriptiveText}
  }
  select {
    ${SortWrapperTextStyle}
    padding: 2px 3px;
    color: var(--selectColot);
    background-color: ${({ theme }) => theme.selectBackground};
    border: none;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
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

interface ProjectsProps {
  data: AllReposAndAllImagesQuery;
}

const Projects = ({
  data: {
    allRepos: { nodes: repos, totalCount },
    allImages: { nodes: covers },
  },
}: ProjectsProps) => {
  const [selectValue, setSelectValue] = useState("created_at");

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <Seo title="Projects" description="Projects and experiments i've learned and created over the years." location="/projects/" />
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
      <ProjectsWrapper>
        {sortProjects(filterProjects(repos, selectedProjects), selectValue).map(({ id, ...repo }) => (
          <Card key={id} repo={getSelectedProject(repo, selectedProjects)} covers={covers} />
        ))}
      </ProjectsWrapper>
      <MoreProjects />
    </>
  );
};

Projects.propTypes = { data: PropTypes.object.isRequired };

export default Projects;

export const query = graphql`
  query AllReposAndAllImages {
    allRepos: allRepo {
      nodes {
        id
        name
        description
        stargazers_count
        html_url
        homepage
        created_at
        pushed_at
      }
      totalCount
    }
    allImages: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
    }
  }
`;
