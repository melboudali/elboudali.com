import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SinglePostQuery } from "../../gatsby-graphql";
import PageTitle from "../components/common/PageTitle";
import styled from "styled-components";

const MDXWrapper = styled.div`
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

const shortcodes = { PageTitle };

interface PostProps {
  data: SinglePostQuery;
}

const Post = ({ data: { mdx: post } }: PostProps) => (
  <MDXWrapper>
    <MDXProvider components={shortcodes}>
      <MDXRenderer frontmatter={post?.frontmatter}>{post?.body!}</MDXRenderer>
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
        cover
        author
        tags
        slug
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
