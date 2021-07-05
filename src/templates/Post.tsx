import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SinglePostQuery } from "../../gatsby-graphql";
import PageTitle from "../components/common/PageTitle";
import styled from "styled-components";

const MDXWrapper = styled.section`
  color: ${({ theme }) => theme.balackAndWhite};
  h1,
  h2,
  h3,
  h4,
  h5 {
    a.anchor {
      height: 100%;
      display: flex;
      align-items: center;
      fill: ${({ theme }) => theme.balackAndWhite};
    }
  }
`;

const Article = styled.article`
  max-width: 860px;
  margin: 0 auto;
`;

const shortcodes = { PageTitle };

interface PostProps {
  data: SinglePostQuery;
}

const Post = ({ data: { mdx: post } }: PostProps) => (
  <MDXWrapper>
    <MDXProvider components={shortcodes}>
      <Article>
        <PageTitle>{post?.frontmatter?.title!}</PageTitle>
        <p>{post?.frontmatter?.date}</p>
        <MDXRenderer frontmatter={post?.frontmatter}>{post?.body!}</MDXRenderer>
      </Article>
    </MDXProvider>
  </MDXWrapper>
);

export default Post;

export const query = graphql`
  query singlePost($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      body
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
        date(formatString: "dddd, DD MMMM, YYYY")
      }
    }
  }
`;
