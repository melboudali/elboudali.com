import React from "react";
import { Paths } from "../../../data/projects";
import { project_topics_type } from "../../../types/projects";
import styled from "styled-components";
import PropTypes from "prop-types";

const SvgWrapper = styled.div`
  width: 24px;
  height: 24px;
  svg > path {
    fill: black;
  }
`;

interface TechIconProps {
  tech: project_topics_type;
}

interface IconWrapperProps {
  path: string;
}

const TechIcon = ({ tech }: TechIconProps) => (
  <SvgWrapper title={tech}>
    <Svg path={Paths[tech].path} />
  </SvgWrapper>
);

const Svg = ({ path }: IconWrapperProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={path} />
  </svg>
);

TechIcon.propTypes = { tech: PropTypes.string.isRequired };

export default TechIcon;
