import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SinglePostQuery } from "../../gatsby-graphql";
import styled, { css } from "styled-components";
import PageTitle from "../components/common/PageTitle";
import Seo from "../components/common/Seo";
import PropTypes from "prop-types";

const Article = styled.article`
  --padding: 0 10px;
  max-width: 980px;
  margin: 0 auto;
  padding: var(--padding);
  @media (min-width: 750px) {
    --padding: 0 35px;
  }
`;

const DateAndTimetoread = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0 20px 0;
`;

const DataAndTimeStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
  &:nth-child(1) > span {
    text-transform: capitalize;
  }
  span {
    margin-top: 2px;
    font-size: 0.875rem;
    line-height: 16px;
    letter-spacing: -0.04em;

    color: ${({ theme }) => theme.iconWithTitle};
  }
`;

const DateWrapper = styled.div`
  ${DataAndTimeStyle}
  svg > path {
    fill: ${({ theme }) => theme.iconWithTitle};
    &:nth-child(1),
    &:nth-last-child(2),
    &:last-child {
      fill: none;
      stroke: ${({ theme }) => theme.iconWithTitle};
    }
  }
`;

const TimeToReadWrapper = styled.div`
  ${DataAndTimeStyle}
  svg > path {
    fill: ${({ theme }) => theme.iconWithTitle};
  }
`;

const MDXRendererWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 1rem;
  line-height: 24px;
  color: ${({ theme }) => theme.postColor};

  img {
    max-width: 100%;
  }

  figure {
    margin: 0;
    figcaption {
      padding: 10px 0;
      font-size: 0.875rem;
      line-height: 16px;
      letter-spacing: -0.04em;
      text-transform: capitalize;
      text-align: center;
      color: ${({ theme }) => theme.iconWithTitle};
      a,
      a:visited {
        text-decoration: underline;
        text-transform: none;
        color: ${({ theme }) => theme.iconWithTitle};
        &:hover {
          color: ${({ theme }) => theme.buttonBackground};
        }
      }
    }
  }

  blockquote,
  details,
  dl,
  ol,
  p,
  pre,
  table,
  ul {
    margin: 0 0 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 24px 0 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.titleColor};
    a.anchor {
      height: 100%;
      display: flex;
      align-items: center;
      fill: ${({ theme }) => theme.titleColor};
    }
  }

  h1 {
    font-size: 2rem;
    line-height: 40px;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 30px;
  }
  h3 {
    font-size: 1.25rem;
    line-height: 25px;
  }
  h4 {
    font-size: inherit;
    line-height: 20px;
  }
  h5 {
    font-size: 0.875rem;
    line-height: 18px;
  }
  h6 {
    font-size: 0.875rem;
    line-height: 17px;
  }

  a,
  a:visited {
    color: ${({ theme }) => theme.postAnchor};
    font-weight: 700;
  }

  ul,
  ol {
    padding-left: 32px;
  }

  .task-list-item {
    list-style-type: none;
    [type="checkbox"] {
      margin: 0 2.6px 3.3px -21.3px;
    }
  }

  li + li {
    margin-top: 4px;
  }

  b,
  strong {
    font-weight: 700;
  }

  hr {
    background-color: ${({ theme }) => theme.postHr};
    border: 0;
    height: 4px;
    margin: 24px 0;
    padding: 0;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.postQuoteBorderColor};
    color: ${({ theme }) => theme.postQuoteColor};
    padding: 0 16px;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  code[class*="language-"],
  pre,
  tt {
    border-radius: 5px;
    background-color: #443166;
  }

  p > code[class*="language-"] {
    padding: 3px 5px 4px;
    white-space: normal;
  }

  /* if you want to add line number uncomment below */
  /* 
  pre[class*="language-"] {
    padding: 0 0 0 1rem;
    background-color: #321c5a;
  }

  pre[class*="language-"].line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  } */

  table {
    display: block;
    max-width: 100%;
    overflow: auto;
    width: 100%;
    width: max-content;
    border-collapse: collapse;
    border-spacing: 0;
  }

  table tr {
    background-color: ${({ theme }) => theme.postTrBgColor};
  }

  table td,
  table th {
    border: 1px solid ${({ theme }) => theme.postThBorderColor};
    padding: 6px 13px;
  }

  table th {
    font-weight: 700;
  }

  td,
  th {
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: ${({ theme }) => theme.postSecTrBgColor};
  }
`;

interface PostProps {
  data: SinglePostQuery;
}

const Post = ({ data: { mdx: post } }: PostProps) => (
  <section>
    <Seo
      title={post?.frontmatter?.title}
      image={post?.frontmatter?.cover?.childImageSharp?.fixed?.src}
      description={post?.frontmatter?.seo_description!}
      location={post?.fields?.slug!}
      type="article"
    />
    <Article>
      <PageTitle>{post?.frontmatter?.title!}</PageTitle>
      <DateAndTimetoread>
        <DateWrapper>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0384 2.30762H2.96153C1.87821 2.30762 1 3.18582 1 4.26914V16.0383C1 17.1216 1.87821 17.9998 2.96153 17.9998H16.0384C17.1217 17.9998 17.9999 17.1216 17.9999 16.0383V4.26914C17.9999 3.18582 17.1217 2.30762 16.0384 2.30762Z"
              strokeLinejoin="round"
            />
            <path d="M11.1345 9.5001C11.6762 9.5001 12.1153 9.061 12.1153 8.51934C12.1153 7.97768 11.6762 7.53857 11.1345 7.53857C10.5929 7.53857 10.1538 7.97768 10.1538 8.51934C10.1538 9.061 10.5929 9.5001 11.1345 9.5001Z" />
            <path d="M14.4038 9.5001C14.9454 9.5001 15.3845 9.061 15.3845 8.51934C15.3845 7.97768 14.9454 7.53857 14.4038 7.53857C13.8621 7.53857 13.423 7.97768 13.423 8.51934C13.423 9.061 13.8621 9.5001 14.4038 9.5001Z" />
            <path d="M11.1345 12.7691C11.6762 12.7691 12.1153 12.33 12.1153 11.7884C12.1153 11.2467 11.6762 10.8076 11.1345 10.8076C10.5929 10.8076 10.1538 11.2467 10.1538 11.7884C10.1538 12.33 10.5929 12.7691 11.1345 12.7691Z" />
            <path d="M14.4038 12.7691C14.9454 12.7691 15.3845 12.33 15.3845 11.7884C15.3845 11.2467 14.9454 10.8076 14.4038 10.8076C13.8621 10.8076 13.423 11.2467 13.423 11.7884C13.423 12.33 13.8621 12.7691 14.4038 12.7691Z" />
            <path d="M4.59612 12.7691C5.13778 12.7691 5.57688 12.33 5.57688 11.7884C5.57688 11.2467 5.13778 10.8076 4.59612 10.8076C4.05446 10.8076 3.61536 11.2467 3.61536 11.7884C3.61536 12.33 4.05446 12.7691 4.59612 12.7691Z" />
            <path d="M7.86535 12.7691C8.40701 12.7691 8.84611 12.33 8.84611 11.7884C8.84611 11.2467 8.40701 10.8076 7.86535 10.8076C7.32369 10.8076 6.88458 11.2467 6.88458 11.7884C6.88458 12.33 7.32369 12.7691 7.86535 12.7691Z" />
            <path d="M4.59612 16.0382C5.13778 16.0382 5.57688 15.5991 5.57688 15.0574C5.57688 14.5158 5.13778 14.0767 4.59612 14.0767C4.05446 14.0767 3.61536 14.5158 3.61536 15.0574C3.61536 15.5991 4.05446 16.0382 4.59612 16.0382Z" />
            <path d="M7.86535 16.0382C8.40701 16.0382 8.84611 15.5991 8.84611 15.0574C8.84611 14.5158 8.40701 14.0767 7.86535 14.0767C7.32369 14.0767 6.88458 14.5158 6.88458 15.0574C6.88458 15.5991 7.32369 16.0382 7.86535 16.0382Z" />
            <path d="M11.1345 16.0382C11.6762 16.0382 12.1153 15.5991 12.1153 15.0574C12.1153 14.5158 11.6762 14.0767 11.1345 14.0767C10.5929 14.0767 10.1538 14.5158 10.1538 15.0574C10.1538 15.5991 10.5929 16.0382 11.1345 16.0382Z" />
            <path d="M14.7307 1V2.30769M4.26923 1V2.30769V1Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9999 5.57715H1" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>

          <span>{post?.frontmatter?.date}</span>
        </DateWrapper>
        <TimeToReadWrapper>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9.01599C0 7.38544 0.407638 5.87478 1.21492 4.49201C2.0222 3.10924 3.11723 2.01421 4.5 1.20693C5.88277 0.399645 7.38544 0 9.00799 0C10.2229 0 11.3899 0.239787 12.5009 0.711368C13.6119 1.18295 14.5631 1.83037 15.3703 2.62966C16.1776 3.42895 16.8171 4.3881 17.2886 5.50711C17.7602 6.62611 18 7.78508 18 9.01599C18 10.2309 17.7602 11.3979 17.2886 12.5089C16.8171 13.6199 16.1696 14.579 15.3703 15.3783C14.571 16.1776 13.6119 16.8171 12.5009 17.2886C11.3899 17.7602 10.2309 18 9.00799 18C7.78508 18 6.61012 17.7602 5.49911 17.2886C4.3881 16.8171 3.42895 16.1696 2.62167 15.3703C1.81439 14.571 1.18295 13.6119 0.703375 12.5089C0.223801 11.4059 0 10.2389 0 9.01599ZM1.98224 9.01599C1.98224 10.9103 2.66963 12.5568 4.0524 13.9556C5.43517 15.3384 7.08171 16.0258 9.00799 16.0258C10.2709 16.0258 11.4458 15.714 12.5169 15.0826C13.5879 14.4512 14.4512 13.6039 15.0826 12.5249C15.714 11.4458 16.0337 10.2789 16.0337 9.01599C16.0337 7.75311 15.714 6.57815 15.0826 5.49911C14.4512 4.42007 13.5959 3.56483 12.5169 2.93339C11.4378 2.30195 10.2709 1.99023 9.00799 1.99023C7.74512 1.99023 6.57016 2.30195 5.49911 2.93339C4.42806 3.56483 3.56483 4.42007 2.9254 5.49911C2.28597 6.57815 1.98224 7.75311 1.98224 9.01599ZM5.11545 7.36945C5.0595 7.19361 5.08348 7.02576 5.1714 6.8659C5.25933 6.70604 5.3952 6.60213 5.57904 6.54618C5.76288 6.49023 5.93073 6.51421 6.09059 6.60213L8.31261 7.85702V3.69272C8.31261 3.50888 8.37655 3.34902 8.50444 3.22114C8.63233 3.09325 8.79219 3.02931 8.97602 3.02931C9.15986 3.02931 9.31972 3.09325 9.4476 3.22114C9.57549 3.34902 9.63943 3.50888 9.63943 3.69272V9.02398C9.63943 9.20782 9.57549 9.36767 9.4476 9.49556C9.31972 9.62345 9.15986 9.68739 8.97602 9.68739C8.80817 9.68739 8.6643 9.63144 8.52842 9.51155L5.42718 7.77709C5.27531 7.68117 5.1714 7.54529 5.11545 7.36945Z" />
          </svg>
          <span>{post?.timeToRead} min to read</span>
        </TimeToReadWrapper>
      </DateAndTimetoread>
      <MDXRendererWrapper>
        <MDXRenderer frontmatter={post?.frontmatter}>{post?.body!}</MDXRenderer>
      </MDXRendererWrapper>
    </Article>
  </section>
);

Post.propTypes = { data: PropTypes.object.isRequired };

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
        seo_description
        cover {
          childImageSharp {
            gatsbyImageData
            fixed(width: 1200, height: 630) {
              src
            }
          }
        }
        tags
        date(formatString: "dddd, DD MMMM YYYY")
      }
    }
  }
`;
