import React from "react";
import { project_topics_type } from "../../types/projects";
import { Paths } from "../../data/projects";
import PropTypes from "prop-types";
import styled from "styled-components";

const TopicWrapper = styled.button<{ mainColor: string; secondColor: string }>`
  background-color: ${({ secondColor }) => secondColor};
  border: 1px solid ${({ mainColor }) => mainColor};
  color: ${({ mainColor }) => mainColor};
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 5px 2px 2px;
  font-weight: 300;
  font-size: 0.75rem;
  svg > path {
    fill: ${({ mainColor }) => mainColor};
  }
  &:hover {
    background-color: ${({ mainColor }) => mainColor};
    color: ${({ secondColor }) => secondColor};
    svg > path {
      fill: ${({ secondColor }) => secondColor};
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
