import React from "react";
import { project_topics_type } from "../../../types/projects";
import TechIcon from "./TechIcon";
import styled from "styled-components";
import PropTypes from "prop-types";

const TechnologiesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
  margin: 20px 0;
  height: 48px;
`;

interface TechnologiesProps {
  project_topis: project_topics_type[];
}

const Technologies = ({ project_topis }: TechnologiesProps) => {
  return (
    <TechnologiesWrapper>
      {project_topis.map((topic, i) => (
        <TechIcon key={i} tech={topic} />
      ))}
    </TechnologiesWrapper>
  );
};

Technologies.propTypes = {};

export default Technologies;
