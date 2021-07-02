import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SinglePostQuery } from "../../gatsby-graphql";

interface PostProps {
  data: SinglePostQuery;
}

const Post = ({ data: { mdx: post } }: PostProps) => {
  return (
    <>
      {/* <h1>{post?.frontmatter?.title}</h1> */}
      <MDXRenderer props={post}>{post?.body!}</MDXRenderer>
    </>
  );
};

export default Post;

export const query = graphql`
  query singlePost($slug: String) {
    mdx(frontmatter: { slug: { eq: "/blog"+$slug} }) {
      id
      body
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
