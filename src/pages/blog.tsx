import React from "react";
import { graphql, Link } from "gatsby";
import { AllPostsQuery } from "../../gatsby-graphql";
import PageTitle from "../components/common/PageTitle";
import PropTypes from "prop-types";

interface BlogProps {
  data: AllPostsQuery;
}

const Blog = ({
  data: {
    allMdx: { nodes: MDX, totalCount },
  },
}: BlogProps) => {
  // FIXME: fix this page later
  return (
    <div>
      <PageTitle ItemsCountNumber={totalCount}>blog</PageTitle>
      This is blog Component/Page
      {MDX.map(mdx => (
        <>
          <p key={mdx.id}>{mdx.frontmatter?.title}</p>
          <Link to={`${mdx.fields?.slug}`}>Click Me</Link>
        </>
      ))}
    </div>
  );
};

Blog.propTypes = {};

export default Blog;

export const query = graphql`
  query allPosts {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        timeToRead
        excerpt(pruneLength: 250)
        fields {
          slug
        }
        frontmatter {
          title
          summary
          cover {
            childrenImageSharp {
              gatsbyImageData
            }
          }
          tags
          date(formatString: "dddd, DD MMMM YYYY")
        }
      }
      totalCount
    }
  }
`;
