import React, { useState } from "react";
import styled from "styled-components";
import { project_topics_type } from "../../../types/projects";
import { Paths } from "../../../data/projects";
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
  z-index: 1;
  padding: 5px;
  position: absolute;
  top: -32px;
  left: 50%;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ color }) => color};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transform: translateX(-50%);
  background: ${({ fill }) => fill};
  box-shadow: ${({ theme }) => `${theme.tooltipFirstShdow} 0px 3px 6px, ${theme.tooltipSecondShdow} 0px 3px 6px`};
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    border-top: 5px solid ${({ fill }) => fill};
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    transform: translateX(-50%);
  }
`;

interface TechIconProps {
  tech: project_topics_type;
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
