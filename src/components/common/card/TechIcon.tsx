import React, { useState } from "react";
import { Paths } from "../../../data/projects";
import { project_topics_type } from "../../../types/projects";
import styled from "styled-components";
import PropTypes from "prop-types";

const SvgWrapper = styled.div<{ fill: string }>`
  position: relative;
  width: 24px;
  height: 24px;
  &:hover {
    svg > path {
      fill: ${({ fill }) => fill};
    }
  }
  svg > path {
    fill: ${({ theme }) => theme.iconsColorAndButtonBorder};
  }
`;

const Tooltip = styled.div<{ fill: string; color: string }>`
  position: absolute;
  /* background: ${({ theme }) => `linear-gradient(92.01deg, ${theme.linearLeftColor} -14.07%, ${theme.linearRightColor} 102.13%)`}; */
  background: ${({ fill }) => fill};
  z-index: 1;
  color: ${({ color }) => color};
  top: -32px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8125rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: 500;
  &:before {
    content: "";
    position: absolute;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    ${({ fill }) => `border-top: 5px solid ${fill}`};
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
  }
`;

interface TechIconProps {
  tech: project_topics_type;
}

interface IconWrapperProps {
  path: string;
}

const TechIcon = ({ tech }: TechIconProps) => {
  const selectedPath = Paths[tech];
  const [showTooltip, setShowTooltip] = useState(false);
  const onMouseEnterLeave = () => {
    setShowTooltip(!showTooltip);
  };
  return (
    <SvgWrapper onMouseEnter={onMouseEnterLeave} onMouseLeave={onMouseEnterLeave} fill={selectedPath.fill}>
      {showTooltip && (
        <Tooltip fill={selectedPath.fill} color={selectedPath.color}>
          {tech}
        </Tooltip>
      )}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={selectedPath.path} />
      </svg>
    </SvgWrapper>
  );
};

TechIcon.propTypes = { tech: PropTypes.string.isRequired };

export default TechIcon;
