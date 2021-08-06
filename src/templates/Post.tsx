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
      &:before(:last-child),
      &:last-child {
        fill: none;
        stroke: var(--secondaryColor);
      }
    }
  }
`;

const TimeToReadWrapper = styled.div`
  svg > path {
    fill: var(--secondaryColor);
  }
`;

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
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.6923 2.53857H2.30769C1.03319 2.53857 0 3.57176 0 4.84627V18.6924C0 19.9669 1.03319 21.0001 2.30769 21.0001H17.6923C18.9668 21.0001 20 19.9669 20 18.6924V4.84627C20 3.57176 18.9668 2.53857 17.6923 2.53857Z"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path d="M11.9231 11.0001C12.5603 11.0001 13.0769 10.4835 13.0769 9.84623C13.0769 9.20898 12.5603 8.69238 11.9231 8.69238C11.2858 8.69238 10.7692 9.20898 10.7692 9.84623C10.7692 10.4835 11.2858 11.0001 11.9231 11.0001Z" />
              <path d="M15.7692 11.0001C16.4065 11.0001 16.9231 10.4835 16.9231 9.84623C16.9231 9.20898 16.4065 8.69238 15.7692 8.69238C15.132 8.69238 14.6154 9.20898 14.6154 9.84623C14.6154 10.4835 15.132 11.0001 15.7692 11.0001Z" />
              <path d="M11.9231 14.8463C12.5603 14.8463 13.0769 14.3297 13.0769 13.6924C13.0769 13.0552 12.5603 12.5386 11.9231 12.5386C11.2858 12.5386 10.7692 13.0552 10.7692 13.6924C10.7692 14.3297 11.2858 14.8463 11.9231 14.8463Z" />
              <path d="M15.7692 14.8463C16.4065 14.8463 16.9231 14.3297 16.9231 13.6924C16.9231 13.0552 16.4065 12.5386 15.7692 12.5386C15.132 12.5386 14.6154 13.0552 14.6154 13.6924C14.6154 14.3297 15.132 14.8463 15.7692 14.8463Z" />
              <path d="M4.23078 14.8463C4.86803 14.8463 5.38463 14.3297 5.38463 13.6924C5.38463 13.0552 4.86803 12.5386 4.23078 12.5386C3.59353 12.5386 3.07693 13.0552 3.07693 13.6924C3.07693 14.3297 3.59353 14.8463 4.23078 14.8463Z" />
              <path d="M8.07691 14.8463C8.71416 14.8463 9.23076 14.3297 9.23076 13.6924C9.23076 13.0552 8.71416 12.5386 8.07691 12.5386C7.43966 12.5386 6.92307 13.0552 6.92307 13.6924C6.92307 14.3297 7.43966 14.8463 8.07691 14.8463Z" />
              <path d="M4.23078 18.6925C4.86803 18.6925 5.38463 18.1759 5.38463 17.5386C5.38463 16.9014 4.86803 16.3848 4.23078 16.3848C3.59353 16.3848 3.07693 16.9014 3.07693 17.5386C3.07693 18.1759 3.59353 18.6925 4.23078 18.6925Z" />
              <path d="M8.07691 18.6925C8.71416 18.6925 9.23076 18.1759 9.23076 17.5386C9.23076 16.9014 8.71416 16.3848 8.07691 16.3848C7.43966 16.3848 6.92307 16.9014 6.92307 17.5386C6.92307 18.1759 7.43966 18.6925 8.07691 18.6925Z" />
              <path d="M11.9231 18.6925C12.5603 18.6925 13.0769 18.1759 13.0769 17.5386C13.0769 16.9014 12.5603 16.3848 11.9231 16.3848C11.2858 16.3848 10.7692 16.9014 10.7692 17.5386C10.7692 18.1759 11.2858 18.6925 11.9231 18.6925Z" />
              <path d="M16.1539 1V2.53846M3.84616 1V2.53846V1Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 6.38477H0" stroke-width="1.5" stroke-linejoin="round" />
            </svg>

            <span>{post?.frontmatter?.date}</span>
          </DateWrapper>
          <TimeToReadWrapper>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10.0178C0 8.20604 0.452931 6.52753 1.34991 4.99112C2.24689 3.45471 3.46359 2.23801 5 1.34103C6.53641 0.44405 8.20604 0 10.0089 0C11.3588 0 12.6554 0.26643 13.8899 0.790408C15.1243 1.31439 16.1812 2.03375 17.0782 2.92185C17.9751 3.80995 18.6856 4.87567 19.2096 6.11901C19.7336 7.36235 20 8.65009 20 10.0178C20 11.3677 19.7336 12.6643 19.2096 13.8988C18.6856 15.1332 17.9663 16.1989 17.0782 17.087C16.1901 17.9751 15.1243 18.6856 13.8899 19.2096C12.6554 19.7336 11.3677 20 10.0089 20C8.65009 20 7.34458 19.7336 6.11012 19.2096C4.87567 18.6856 3.80995 17.9663 2.91297 17.0782C2.01599 16.1901 1.31439 15.1243 0.781527 13.8988C0.248668 12.6732 0 11.3766 0 10.0178ZM2.20249 10.0178C2.20249 12.1226 2.96625 13.952 4.50266 15.5062C6.03908 17.0426 7.86856 17.8064 10.0089 17.8064C11.4121 17.8064 12.7176 17.46 13.9076 16.7584C15.0977 16.0568 16.0568 15.1155 16.7584 13.9165C17.46 12.7176 17.8153 11.421 17.8153 10.0178C17.8153 8.61457 17.46 7.30906 16.7584 6.11012C16.0568 4.91119 15.1066 3.96092 13.9076 3.25933C12.7087 2.55773 11.4121 2.21137 10.0089 2.21137C8.60568 2.21137 7.30018 2.55773 6.11012 3.25933C4.92007 3.96092 3.96092 4.91119 3.25044 6.11012C2.53996 7.30906 2.20249 8.61457 2.20249 10.0178ZM5.68384 8.18828C5.62167 7.9929 5.64831 7.8064 5.746 7.62878C5.84369 7.45116 5.99467 7.3357 6.19893 7.27354C6.4032 7.21137 6.5897 7.23801 6.76732 7.3357L9.23623 8.73002V4.10302C9.23623 3.89876 9.30728 3.72114 9.44938 3.57904C9.59147 3.43695 9.76909 3.3659 9.97336 3.3659C10.1776 3.3659 10.3552 3.43695 10.4973 3.57904C10.6394 3.72114 10.7105 3.89876 10.7105 4.10302V10.0266C10.7105 10.2309 10.6394 10.4085 10.4973 10.5506C10.3552 10.6927 10.1776 10.7638 9.97336 10.7638C9.78686 10.7638 9.627 10.7016 9.47602 10.5684L6.0302 8.64121C5.86146 8.53464 5.746 8.38366 5.68384 8.18828Z" />
            </svg>
            <span>{post?.timeToRead} min to read</span>
          </TimeToReadWrapper>
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
