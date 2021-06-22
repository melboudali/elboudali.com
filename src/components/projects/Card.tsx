import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getDate, getProjectCover } from "../../utils/projects";
import { coverType, fullCardRepoType } from "../../types/projects";
import Technologies from "../common/card/Technologies";
import Links from "../common/card/Links";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const CardWrapper = styled.div`
  box-shadow: 0px 2px 5px -1px rgba(50, 50, 93, 0.25), 0px 1px 3px -1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  transition: box-shadow 0.1s linear, transform 0.1s linear;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: translateY(-2px);
  }
  .gatsby_image {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    vertical-align: middle;
  }
`;

const Details = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.titleColor};
`;

const FlexStyle = css`
  display: flex;
  align-items: center;
`;

export const DateAndStars = styled.div`
  ${FlexStyle}
  justify-content: space-between;
  margin: 7px 0;
  span {
    margin-top: 2px;
    font-size: 0.6875rem;
    text-transform: uppercase;
    color: var(--secondaryColor);
  }
`;

export const DateWrapper = styled.div`
  ${FlexStyle}
  gap: 5px;
  svg {
    &:nth-child(1) {
      path {
        stroke: var(--secondaryColor);
      }
    }
    &:nth-child(2) {
      path {
        fill: var(--secondaryColor);
      }
    }
  }
`;

const DateContent = styled.div`
  ${FlexStyle}
  gap: 3px;
`;

const StarsWrapper = styled.div`
  ${FlexStyle}
  gap: 2px;
  span {
    margin-top: 2px;
  }
  svg {
    path {
      stroke: var(--secondaryColor);
    }
  }
`;

const Description = styled.p`
  font-size: 0.8125rem;
  text-transform: capitalize;
  text-align: justify;
  height: 60px;
  /* overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical; */
`;

interface CardProps {
  repo: fullCardRepoType;
  covers: coverType[];
}

const Card = ({
  repo: {
    name,
    description,
    forks_count,
    stargazers_count,
    html_url,
    language,
    homepage,
    created_at,
    pushed_at,
    project_title,
    project_cover,
    project_topis,
    project_figmaLink,
  },
  covers,
}: CardProps) => {
  console.log(html_url, homepage);
  return (
    <CardWrapper>
      <GatsbyImage image={getProjectCover(project_cover, covers).childImageSharp.gatsbyImageData} alt={`${name} cover`} className="gatsby_image" />
      <Details>
        <CardTitle title={project_title}>{project_title}</CardTitle>
        <DateAndStars>
          <DateWrapper title="First commit → Latest commit">
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
            <DateContent>
              <span>{getDate(created_at)}</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.135 6.32831H1.28906C1.09491 6.32831 0.9375 6.48575 0.9375 6.67987V8.3205C0.9375 8.51462 1.09491 8.67206 1.28906 8.67206H10.135V10.0214C10.135 10.6479 10.8923 10.9616 11.3353 10.5186L13.8566 7.99737C14.1312 7.72281 14.1312 7.27756 13.8566 7.003L11.3353 4.48176C10.8924 4.03882 10.135 4.35253 10.135 4.97896V6.32831Z" />
              </svg>
              <span>{getDate(pushed_at)}</span>
            </DateContent>
          </DateWrapper>
          {!!stargazers_count && (
            <StarsWrapper>
              <span>{stargazers_count}</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.0625 6.09375H9.02344L7.5 1.40625L5.97656 6.09375H0.9375L5.03906 8.90625L3.45703 13.5938L7.5 10.6641L11.543 13.5938L9.96094 8.90625L14.0625 6.09375Z"
                  strokeLinejoin="round"
                />
              </svg>
            </StarsWrapper>
          )}
        </DateAndStars>
        <Description>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque facilis, quae nemo quaerat nihil. Perferendis quas exercitationem
          laboriosam nobis iure, dolorem temporibus debitis, ullam nulla, veritatis molestiae veniam? A quis ea fugit nam corrupti modi quia
          perferendis voluptas velit cupiditate quas, sit qui quae explicabo natus ipsum in autem nostrum maiores voluptatem totam dolores tempora
          iure. */}
          {description}
        </Description>
        <Technologies project_topis={project_topis} />
        <Links link={homepage as string} githubLink={html_url as string} figmaLink={project_figmaLink} />
      </Details>
    </CardWrapper>
  );
};

Card.propTypes = {
  repo: PropTypes.object.isRequired,
  covers: PropTypes.array.isRequired,
};

export default Card;
