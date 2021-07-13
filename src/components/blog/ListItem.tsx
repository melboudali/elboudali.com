import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { MDXType } from "../../types/blog";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageWrapper = styled.div`
  flex: 1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;
  position: relative;
  .gatsby_image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ListItemWrapper = styled(Link)`
  display: flex;
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: ${({ theme }) => `0px 2px 5px -1px ${theme.firstBoxShadow}, 0px 1px 3px -1px ${theme.secondBoxShadow}`};
  border-radius: 5px;
  min-height: auto;

  &:hover {
    ${ImageWrapper} .gatsby_image {
      transform: scale(1.1) rotate(2deg);
    }
  }
`;

const Details = styled.div`
  flex: 2;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  line-height: 23px;
  text-transform: capitalize;
  margin: 0 0 5px 0;
  font-weight: 400;
  color: ${({ theme }) => theme.titleColor};
`;

interface ListItemProps {
  mdx: MDXType;
}

const ListItem = ({ mdx }: ListItemProps) => {
  return (
    <ListItemWrapper to={mdx.fields.slug}>
      <ImageWrapper>
        <GatsbyImage image={mdx.frontmatter?.cover?.childImageSharp?.gatsbyImageData} alt={` cover`} className="gatsby_image" />
      </ImageWrapper>
      <Details>
        <Title>{mdx.frontmatter?.title}</Title>

        <Link to={`${mdx.fields?.slug}`}>Click Me</Link>
        <p>{mdx.excerpt}</p>
      </Details>
    </ListItemWrapper>
  );
};

ListItem.propTypes = {};

export default ListItem;
