import React from "react";
import { project_topics_type } from "../../../types/projects";
import TechIcon from "./TechIcon";
import PropTypes from "prop-types";

interface TechnologiesProps {
  project_topis: project_topics_type[];
}

const Technologies = ({ project_topis }: TechnologiesProps) => {
  return (
    <div>
      {project_topis.map((topic, i) => (
        <TechIcon key={i} tech={topic} />
      ))}
    </div>
  );
};

Technologies.propTypes = {};

export default Technologies;
