import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXType } from "../../types/blog";
import styled, { css } from "styled-components";
import TechIcon from "../common/card/TechIcon";
import { project_topics_type } from "../../types/projects";
import PropTypes from "prop-types";

const ImageWrapper = styled.div<{ listType: "list" | "grid" }>`
  --height: 240px;
  --borderRadius: 5px 5px 0 0;
  position: relative;
  flex: 1;
  overflow: hidden;
  min-height: var(--height);
  border-radius: var(--borderRadius);
  .gatsby_image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (min-width: 750px) {
    --height: ${({ listType }) => (listType === "list" ? "auto" : "240px")};
    --borderRadius: ${({ listType }) => (listType === "list" ? "5px 0 0 5px" : "5px 5px 0 0")};
  }
`;

const ListItemWrapper = styled(Link)<{ list_type: "list" | "grid" }>`
  --maxWidth: 550px;
  --flexDirection: column;
  width: 100%;
  max-width: var(--maxWidth);
  min-height: auto;
  display: flex;
  flex-direction: var(--flexDirection);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: ${({ theme }) => `0px 2px 5px -1px ${theme.firstBoxShadow}, 0px 1px 3px -1px ${theme.secondBoxShadow}`};
  &:hover {
    ${ImageWrapper} .gatsby_image {
      transform: scale(1.1) rotate(2deg);
    }
  }
  @media (min-width: 750px) {
    --maxWidth: ${({ list_type }) => (list_type === "list" ? "100%" : "calc(50% - 20px)")};
    --flexDirection: ${({ list_type }) => (list_type === "list" ? "row" : "column")};
  }
`;

const Details = styled.div`
  --flex: 1;
  --padding: 10px;
  flex: var(--flex);
  padding: var(--padding);
  @media (min-width: 750px) {
    --flex: 2;
  }
  @media (min-width: 900px) {
    --padding: 20px;
  }
`;

const Title = styled.h2`
  margin: 0 0 5px 0;
  font-size: 1.25rem;
  font-weight: inherit;
  text-transform: capitalize;
  line-height: 24px;
  color: ${({ theme }) => theme.titleColor};
`;

const DateAndTimeToReadWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const CommonStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    margin-top: 2px;
    font-size: 0.75rem;
    line-height: 15px;
    color: var(--secondaryColor);
  }
`;

const DateWrapper = styled.div`
  ${CommonStyle}
  svg > path {
    fill: var(--secondaryColor);
    &:nth-child(1),
    &:last-child {
      fill: none;
      stroke: var(--secondaryColor);
    }
  }
  span {
    text-transform: capitalize;
  }
`;

const TimeToRead = styled.div`
  ${CommonStyle}
  svg > path {
    fill: var(--secondaryColor);
  }
`;

const TopicsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Excerpt = styled.p`
  font-weight: 300;
  line-height: 24px;
  margin: 10px 0 0 0;
  text-align: justify;
  color: ${({ theme }) => theme.titleColor};
  &::first-letter {
    text-transform: uppercase;
  }
`;

interface CardProps {
  mdx: MDXType;
  listType: "list" | "grid";
}

const Card = ({ mdx, listType }: CardProps) => (
  <ListItemWrapper to={mdx.fields?.slug} list_type={listType}>
    <ImageWrapper listType={listType}>
      <GatsbyImage
        image={mdx.frontmatter?.cover?.childImageSharp?.gatsbyImageData}
        alt={`${mdx.frontmatter?.title} thumbnail`}
        className="gatsby_image"
      />
    </ImageWrapper>
    <Details>
      <Title>{mdx.frontmatter?.title}</Title>
      <DateAndTimeToReadWrapper>
        <DateWrapper>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <span>{mdx.frontmatter?.date}</span>
        </DateWrapper>
        <TimeToRead>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 7.51332C0 6.15453 0.339698 4.89565 1.01243 3.74334C1.68517 2.59103 2.59769 1.67851 3.75 1.00577C4.90231 0.333037 6.15453 0 7.50666 0C8.51909 0 9.49156 0.199822 10.4174 0.592806C11.3432 0.98579 12.1359 1.52531 12.8086 2.19139C13.4813 2.85746 14.0142 3.65675 14.4072 4.58925C14.8002 5.52176 15 6.48757 15 7.51332C15 8.52576 14.8002 9.49822 14.4072 10.4241C14.0142 11.3499 13.4747 12.1492 12.8086 12.8153C12.1425 13.4814 11.3432 14.0142 10.4174 14.4072C9.49156 14.8002 8.52575 15 7.50666 15C6.48757 15 5.50844 14.8002 4.58259 14.4072C3.65675 14.0142 2.85746 13.4747 2.18472 12.8086C1.51199 12.1425 0.98579 11.3433 0.586146 10.4241C0.186501 9.50488 0 8.53242 0 7.51332ZM1.65186 7.51332C1.65186 9.09192 2.22469 10.464 3.377 11.6297C4.52931 12.782 5.90142 13.3548 7.50666 13.3548C8.55906 13.3548 9.53819 13.095 10.4307 12.5688C11.3233 12.0426 12.0426 11.3366 12.5688 10.4374C13.095 9.53819 13.3615 8.56572 13.3615 7.51332C13.3615 6.46092 13.095 5.48179 12.5688 4.58259C12.0426 3.68339 11.3299 2.97069 10.4307 2.44449C9.53153 1.91829 8.55906 1.65853 7.50666 1.65853C6.45426 1.65853 5.47513 1.91829 4.58259 2.44449C3.69005 2.97069 2.97069 3.68339 2.43783 4.58259C1.90497 5.48179 1.65186 6.46092 1.65186 7.51332ZM4.26288 6.14121C4.21625 5.99467 4.23623 5.8548 4.3095 5.72158C4.38277 5.58837 4.496 5.50178 4.6492 5.45515C4.8024 5.40853 4.94227 5.42851 5.07549 5.50178L6.92718 6.54751V3.07726C6.92718 2.92407 6.98046 2.79085 7.08703 2.68428C7.19361 2.57771 7.32682 2.52442 7.48002 2.52442C7.63321 2.52442 7.76643 2.57771 7.873 2.68428C7.97957 2.79085 8.03286 2.92407 8.03286 3.07726V7.51998C8.03286 7.67318 7.97957 7.80639 7.873 7.91297C7.76643 8.01954 7.63321 8.07283 7.48002 8.07283C7.34014 8.07283 7.22025 8.0262 7.10702 7.92629L4.52265 6.48091C4.39609 6.40098 4.3095 6.28774 4.26288 6.14121Z" />
          </svg>
          <span>{mdx.timeToRead} min to read</span>
        </TimeToRead>
      </DateAndTimeToReadWrapper>
      <TopicsWrapper>
        {mdx.frontmatter?.tags?.map((tag, id) => (
          <TechIcon key={id} tech={tag as project_topics_type} />
        ))}
      </TopicsWrapper>
      <Excerpt>{mdx.frontmatter?.summary}</Excerpt>
    </Details>
  </ListItemWrapper>
);

Card.propTypes = { mdx: PropTypes.object.isRequired, listType: PropTypes.string.isRequired };

export default Card;
