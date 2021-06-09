import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";

const ProjectsWrapper = styled.div``;

interface projectsProps {}

const projects = ({
  data: {
    allBeer: { nodes: beers },
  },
}: projectsProps) => {
  return (
    <ProjectsWrapper>
      <PageTitle>projects</PageTitle>
    </ProjectsWrapper>
  );
};

projects.propTypes = {};

export default projects;

export const query = graphql`
  query {
    allBeer {
      nodes {
        id
        name
        image
        price
        rating {
          reviews
          average
        }
      }
    }
  }
`;
