import React from "react";
import { project_topics_type } from "../../types/projects";
import { Paths } from "../../data/projects";
import PropTypes from "prop-types";
import styled from "styled-components";

const TopicWrapper = styled.button<{ mainColor: string; secondColor: string }>`
  --MainColor: ${({ theme, mainColor, secondColor }) => (theme.balackAndWhite === "var(--black)" ? mainColor : secondColor)};
  --SecondColor: ${({ theme, mainColor, secondColor }) => (theme.balackAndWhite === "var(--black)" ? secondColor : mainColor)};
  background-color: var(--SecondColor);
  border: 1px solid ${({ mainColor }) => mainColor};
  color: var(--MainColor);
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 5px 2px 2px;
  font-weight: 300;
  font-size: 0.75rem;
  svg > path {
    fill: var(--MainColor);
  }
  &:hover {
    background-color: var(--MainColor);
    color: var(--SecondColor);
    svg > path {
      fill: var(--SecondColor);
    }
  }
`;

interface TopicProps {
  topic: project_topics_type;
}

const Topic = ({ topic }: TopicProps) => {
  const selectedPath = Paths[topic];
  return (
    <TopicWrapper mainColor={selectedPath.fill} secondColor={selectedPath.color} type="button" aria-label={topic}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={selectedPath.path} />
      </svg>
      {topic}
    </TopicWrapper>
  );
};

Topic.propTypes = {};

export default Topic;
