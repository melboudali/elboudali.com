import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { AllPostsQuery } from "../../gatsby-graphql";
import PageTitle from "../components/common/PageTitle";
import styled, { css } from "styled-components";
import Topic from "../components/blog/Topic";
import PropTypes from "prop-types";

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListStyleWrapper = styled.div<{ listType: "grid" | "list" }>`
  display: flex;
  align-items: center;
  gap: 10px;
  button {
    display: flex;
    align-items: center;
  }
  button:nth-child(1) > svg > path {
    fill: ${({ listType, theme }) => (listType === "list" ? theme.buttonBackground : "#d8d8d8")};
  }
  button:nth-child(2) > svg > path {
    fill: ${({ listType, theme }) => (listType === "list" ? "#d8d8d8" : theme.buttonBackground)};
  }
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 20px;
`;

const TopicsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PrevAndNext = css`
  position: absolute;
  display: flex;
  align-items: center;
  width: 50px;
  height: 100%;
  top: 50%;
  transform: translate(0, -50%);
`;

const Prev = styled.button`
  ${PrevAndNext}
  left: 0;
  justify-content: flex-start;
  ${({ theme }) => `background: linear-gradient(to right,${theme.bodyBackground}  20%, rgba(0, 0, 0, 0) 80%)`};
`;

const Next = styled.button`
  ${PrevAndNext}
  right: 0;
  justify-content: flex-end;
  ${({ theme }) => `background: linear-gradient(to left,${theme.bodyBackground}  20%, rgba(0, 0, 0, 0) 80%)`};
`;

const Topics = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  /* width: 100%; */
`;

interface BlogProps {
  data: AllPostsQuery;
}

const Blog = ({
  data: {
    allMdx: { nodes: MDX, totalCount },
  },
}: BlogProps) => {
  const [listType, setListType] = useState<"list" | "grid">("list");
  const onClick = () => {
    return listType === "list" ? setListType("grid") : setListType("list");
  };
  return (
    <>
      <PageTitleWrapper>
        <PageTitle ItemsCountNumber={totalCount}>blog</PageTitle>
        <ListStyleWrapper listType={listType}>
          <button type="button" onClick={onClick} aria-label="Choose List Type">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 0H1C0.447715 0 0 0.447715 0 1V5.85714C0 6.40943 0.447716 6.85714 1 6.85714H23C23.5523 6.85714 24 6.40943 24 5.85714V1C24 0.447715 23.5523 0 23 0Z" />
              <path d="M23 17.1428H1C0.447715 17.1428 0 17.5905 0 18.1428V23C0 23.5523 0.447716 24 1 24H23C23.5523 24 24 23.5523 24 23V18.1428C24 17.5905 23.5523 17.1428 23 17.1428Z" />
              <path d="M23 8.57153H1C0.447715 8.57153 0 9.01925 0 9.57153V14.4287C0 14.981 0.447716 15.4287 1 15.4287H23C23.5523 15.4287 24 14.981 24 14.4287V9.57153C24 9.01925 23.5523 8.57153 23 8.57153Z" />
            </svg>
          </button>
          <button type="button" onClick={onClick} aria-label="Choose List Type">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.21429 11.1429H1.92857C1.41708 11.1429 0.926543 10.9397 0.564865 10.578C0.203188 10.2163 0 9.72577 0 9.21429V1.92857C0 1.41708 0.203188 0.926543 0.564865 0.564865C0.926543 0.203188 1.41708 0 1.92857 0H9.21429C9.72577 0 10.2163 0.203188 10.578 0.564865C10.9397 0.926543 11.1429 1.41708 11.1429 1.92857V9.21429C11.1429 9.72577 10.9397 10.2163 10.578 10.578C10.2163 10.9397 9.72577 11.1429 9.21429 11.1429V11.1429ZM22.0714 11.1429H14.7857C14.2742 11.1429 13.7837 10.9397 13.422 10.578C13.0603 10.2163 12.8571 9.72577 12.8571 9.21429V1.92857C12.8571 1.41708 13.0603 0.926543 13.422 0.564865C13.7837 0.203188 14.2742 0 14.7857 0H22.0714C22.5829 0 23.0735 0.203188 23.4351 0.564865C23.7968 0.926543 24 1.41708 24 1.92857V9.21429C24 9.72577 23.7968 10.2163 23.4351 10.578C23.0735 10.9397 22.5829 11.1429 22.0714 11.1429V11.1429ZM9.21429 24H1.92857C1.41708 24 0.926543 23.7968 0.564865 23.4351C0.203188 23.0735 0 22.5829 0 22.0714V14.7857C0 14.2742 0.203188 13.7837 0.564865 13.422C0.926543 13.0603 1.41708 12.8571 1.92857 12.8571H9.21429C9.72577 12.8571 10.2163 13.0603 10.578 13.422C10.9397 13.7837 11.1429 14.2742 11.1429 14.7857V22.0714C11.1429 22.5829 10.9397 23.0735 10.578 23.4351C10.2163 23.7968 9.72577 24 9.21429 24V24ZM22.0714 24H14.7857C14.2742 24 13.7837 23.7968 13.422 23.4351C13.0603 23.0735 12.8571 22.5829 12.8571 22.0714V14.7857C12.8571 14.2742 13.0603 13.7837 13.422 13.422C13.7837 13.0603 14.2742 12.8571 14.7857 12.8571H22.0714C22.5829 12.8571 23.0735 13.0603 23.4351 13.422C23.7968 13.7837 24 14.2742 24 14.7857V22.0714C24 22.5829 23.7968 23.0735 23.4351 23.4351C23.0735 23.7968 22.5829 24 22.0714 24V24Z" />
            </svg>
          </button>
        </ListStyleWrapper>
      </PageTitleWrapper>
      <PostsWrapper>
        <TopicsWrapper>
          <Prev type="button" aria-label="previous">
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L2 9L9 16" stroke="#A5A5A5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Prev>
          <Topics>
            <Topic topic="HTML" />
            <Topic topic="CSS" />
            <Topic topic="SASS" />
            <Topic topic="JavaScript" />
            <Topic topic="TypeScript" />
            <Topic topic="Gatsby" />
            <Topic topic="Next" />
            <Topic topic="StyledComponents" />
            <Topic topic="GraphQL" />
            <Topic topic="Figma" />
            <Topic topic="Express" />
            <Topic topic="PostgreSQL" />
          </Topics>
          <Next type="button" aria-label="next">
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00676 2L9.00085 9L2.00676 16" stroke="#A5A5A5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Next>
        </TopicsWrapper>
      </PostsWrapper>
      {MDX.map(mdx => (
        <>
          <p key={mdx.id}>{mdx.frontmatter?.title}</p>
          <Link to={`${mdx.fields?.slug}`}>Click Me</Link>
        </>
      ))}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur consequuntur repellendus doloremque nihil deleniti perspiciatis, consequatur
      illo veritatis ex! Molestias numquam excepturi fugit facere laudantium itaque voluptates suscipit ducimus. Consequuntur, illum ullam commodi
      sunt rerum autem, quia eaque, eveniet eum rem mollitia voluptate adipisci possimus obcaecati optio ex delectus officiis impedit debitis
      reiciendis consectetur repellat atque nulla? In consectetur quia reiciendis accusamus eaque delectus, nesciunt voluptatibus cumque quasi ad quo
      eveniet voluptatum? Quibusdam quisquam enim asperiores recusandae cum odio eaque distinctio facere maxime quae, sapiente maiores nostrum eum
      quaerat quam sit illo debitis beatae eos ut consequatur in ratione placeat. Quod velit numquam vero suscipit. Magnam praesentium sunt aut modi
      ab, itaque soluta error ipsa tempore repudiandae consequatur. Reiciendis facilis ex porro eaque, nostrum ipsum expedita repellat consectetur
      tempora, quas perferendis ab, recusandae accusantium. Repudiandae, amet hic, omnis inventore iusto recusandae quae ducimus explicabo fugiat ad
      rerum distinctio corrupti modi expedita dolor illo eum blanditiis dolorem? Cupiditate exercitationem quas assumenda placeat illum eaque officia,
      est perferendis distinctio porro quos ratione excepturi nisi asperiores expedita eius ipsam pariatur, commodi ipsum autem consectetur minus
      quaerat enim. Amet natus unde maiores ratione culpa! Sed excepturi, quod ad, vero explicabo repellendus enim fugit, corrupti placeat possimus
      praesentium quia tempora doloremque earum tempore dolor sequi expedita quisquam rerum odit. Iure neque maxime est facilis nam magnam velit in
      repellendus voluptates cupiditate animi, inventore rerum consectetur quis libero officia repellat ullam vel quibusdam magni. Recusandae iusto
      sunt non laborum corrupti nisi iure nesciunt commodi temporibus quas.
    </>
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
