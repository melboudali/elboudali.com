import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { MDXType } from "../../types/blog";
import PropTypes from "prop-types";
import styled from "styled-components";

const ListItemWrapper = styled(Link)`
  display: flex;
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: ${({ theme }) => `0px 2px 5px -1px ${theme.firstBoxShadow}, 0px 1px 3px -1px ${theme.secondBoxShadow}`};
  border-radius: 5px;
  min-height: 169px;
  .gatsby_image {
    flex: 1;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    object-fit: cover;
  }
`;

const Details = styled.div`
  flex: 2;
  padding: 20px;
`;

interface ListItemProps {
  mdx: MDXType;
}

const ListItem = ({ mdx }: ListItemProps) => {
  return (
    <ListItemWrapper to={mdx.fields.slug}>
      <GatsbyImage image={mdx.frontmatter?.cover?.childImageSharp?.gatsbyImageData} alt={` cover`} className="gatsby_image" />
      <Details>
        <p>{mdx.frontmatter?.title}</p>

        <Link to={`${mdx.fields?.slug}`}>Click Me</Link>
        <p>{mdx.excerpt}</p>
      </Details>
    </ListItemWrapper>
  );
};

ListItem.propTypes = {};

export default ListItem;
