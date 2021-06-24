import React from "react";
import about from "../../data/about";
import styled from "styled-components";
import PropTypes from "prop-types";

const MoreProjextsLinkWrapper = styled.div`
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
    text-transform: uppercase;
  }
  @media (min-width: 500px) {
    --width: 370px;
  }
`;

interface MoreProjectsLinkProps {}

const MoreProjectsLink = ({}: MoreProjectsLinkProps) => {
  return (
    <MoreProjextsLinkWrapper>
      <a href={`${about.socialLinks.github}?tab=repositories`} target="_blank">
        more projects
      </a>
    </MoreProjextsLinkWrapper>
  );
};

MoreProjectsLink.propTypes = {};

export default MoreProjectsLink;
