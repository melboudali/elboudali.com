import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage } from "gatsby-plugin-image";
import { SinglePostQuery } from "../../gatsby-graphql";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";

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
  .gatsby_image {
    width: 100%;
    height: 350px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 20px;
  }
`;

const DateAndTimetoread = styled.div``;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    path {
      fill: var(--secondaryColor);
      &:nth-child(1),
      &:last-child {
        fill: none;
        stroke: var(--secondaryColor);
      }
    }
  }
`;

const TimeToReadWrapper = styled.div``;

const shortcodes = { PageTitle };

interface PostProps {
  data: SinglePostQuery;
}

const Post = ({ data: { mdx: post } }: PostProps) => (
  <MDXWrapper>
    <MDXProvider components={shortcodes}>
      <Article>
        <GatsbyImage image={post?.frontmatter?.cover?.childImageSharp?.gatsbyImageData} alt={post?.frontmatter?.title!} className="gatsby_image" />
        <PageTitle>{post?.frontmatter?.title!}</PageTitle>
        <DateAndTimetoread>
          <DateWrapper>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.1875 2.34375H2.8125C2.03585 2.34375 1.40625 2.97335 1.40625 3.75V12.1875C1.40625 12.9642 2.03585 13.5938 2.8125 13.5938H12.1875C12.9642 13.5938 13.5938 12.9642 13.5938 12.1875V3.75C13.5938 2.97335 12.9642 2.34375 12.1875 2.34375Z"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M8.67188 7.5C9.0602 7.5 9.375 7.1852 9.375 6.79688C9.375 6.40855 9.0602 6.09375 8.67188 6.09375C8.28355 6.09375 7.96875 6.40855 7.96875 6.79688C7.96875 7.1852 8.28355 7.5 8.67188 7.5Z" />
              <path d="M11.0156 7.5C11.404 7.5 11.7188 7.1852 11.7188 6.79688C11.7188 6.40855 11.404 6.09375 11.0156 6.09375C10.6273 6.09375 10.3125 6.40855 10.3125 6.79688C10.3125 7.1852 10.6273 7.5 11.0156 7.5Z" />
              <path d="M8.67188 9.84375C9.0602 9.84375 9.375 9.52895 9.375 9.14062C9.375 8.7523 9.0602 8.4375 8.67188 8.4375C8.28355 8.4375 7.96875 8.7523 7.96875 9.14062C7.96875 9.52895 8.28355 9.84375 8.67188 9.84375Z" />
              <path d="M11.0156 9.84375C11.404 9.84375 11.7188 9.52895 11.7188 9.14062C11.7188 8.7523 11.404 8.4375 11.0156 8.4375C10.6273 8.4375 10.3125 8.7523 10.3125 9.14062C10.3125 9.52895 10.6273 9.84375 11.0156 9.84375Z" />
              <path d="M3.98438 9.84375C4.3727 9.84375 4.6875 9.52895 4.6875 9.14062C4.6875 8.7523 4.3727 8.4375 3.98438 8.4375C3.59605 8.4375 3.28125 8.7523 3.28125 9.14062C3.28125 9.52895 3.59605 9.84375 3.98438 9.84375Z" />
              <path d="M6.32812 9.84375C6.71645 9.84375 7.03125 9.52895 7.03125 9.14062C7.03125 8.7523 6.71645 8.4375 6.32812 8.4375C5.9398 8.4375 5.625 8.7523 5.625 9.14062C5.625 9.52895 5.9398 9.84375 6.32812 9.84375Z" />
              <path d="M3.98438 12.1875C4.3727 12.1875 4.6875 11.8727 4.6875 11.4844C4.6875 11.096 4.3727 10.7812 3.98438 10.7812C3.59605 10.7812 3.28125 11.096 3.28125 11.4844C3.28125 11.8727 3.59605 12.1875 3.98438 12.1875Z" />
              <path d="M6.32812 12.1875C6.71645 12.1875 7.03125 11.8727 7.03125 11.4844C7.03125 11.096 6.71645 10.7812 6.32812 10.7812C5.9398 10.7812 5.625 11.096 5.625 11.4844C5.625 11.8727 5.9398 12.1875 6.32812 12.1875Z" />
              <path d="M8.67188 12.1875C9.0602 12.1875 9.375 11.8727 9.375 11.4844C9.375 11.096 9.0602 10.7812 8.67188 10.7812C8.28355 10.7812 7.96875 11.096 7.96875 11.4844C7.96875 11.8727 8.28355 12.1875 8.67188 12.1875Z" />
              <path d="M11.25 1.40625V2.34375M3.75 1.40625V2.34375V1.40625Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.5938 4.6875H1.40625" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span>{post?.frontmatter?.date}</span>
          </DateWrapper>
          <TimeToReadWrapper></TimeToReadWrapper>
        </DateAndTimetoread>
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
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
        date(formatString: "dddd, DD MMMM YYYY")
      }
    }
  }
`;
