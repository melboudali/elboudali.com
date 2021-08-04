import React from "react";
import styled from "styled-components";
import about from "../../data/about";

const MoreProjectsWrapper = styled.div`
  --width: 100%;
  width: var(--width);
  height: 50px;
  margin: 50px auto;
  background-color: ${({ theme }) => theme.selectBackground};
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--white);
    font-weight: bold;
    font-size: 1.25rem;
    letter-spacing: -0.04em;
    line-height: 23px;
    text-transform: uppercase;
  }
  @media (min-width: 500px) {
    --width: 370px;
  }
`;

const MoreProjects = () => (
  <MoreProjectsWrapper>
    <a href={`${about.socialLinks.github}?tab=repositories`} target="_blank">
      more projects
    </a>
  </MoreProjectsWrapper>
);

export default MoreProjects;
