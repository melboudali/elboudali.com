import React from "react";
import styled, { css } from "styled-components";
import about from "../../data/about";
import PropTypes from "prop-types";

const SchoolDegreesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MarginLeft = css`
  --marginLeft: 0;
  margin-left: var(--marginLeft);
  @media (min-width: 750px) {
    --marginLeft: 45px;
  }
`;

const SchoolDegreeWrapper = styled.div`
  ${MarginLeft}
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  gap: 5px;
`;

const ScoolDegreeTitle = styled.h2`
  --alignItems: flex-start;
  display: flex;
  align-items: var(--alignItems);
  gap: 5px;
  margin: 0;
  font-size: inherit;
  font-weight: 300;
  text-transform: capitalize;
  text-align: justify;
  letter-spacing: 0.1em;
  line-height: 19px;
  color: ${({ theme }) => theme.titleColor};
  a {
    display: flex;
    align-items: center;
    svg > path {
      fill: ${({ theme }) => theme.iconWithTitle};
    }
  }
  @media (min-width: 750px) {
    --alignItems: center;
  }
`;

const SchollWrapper = styled.div`
  --alignItems: center;
  display: flex;
  align-items: var(--alignItems);
  gap: 5px;
  p {
    margin: 0;
    font-size: inherit;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 19px;
    color: ${({ theme }) => theme.iconWithTitle};
    span {
      font-size: 0.8125rem;
      text-transform: capitalize;
    }
  }
  svg > path {
    fill: ${({ theme }) => theme.iconWithTitle};
  }
  @media (max-width: 475px) {
    --alignItems: flex-start;
  }
`;

const ChallengesLink = styled.a`
  ${MarginLeft}
  margin-top:25px;
  color: ${({ theme }) => theme.titleColor};
  font-size: 0.8rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

interface SchoolDegreeItemProps {
  title: string;
  schoolName: string;
  certificationLink?: string;
  abbrExpantion?: string;
}

const SchoolDegree = () => (
  <SchoolDegreesWrapper>
    {about.schoolDegrees.map((schoolDegree, index) => (
      <SchoolDegreeItem
        key={index}
        title={schoolDegree.title}
        schoolName={schoolDegree.schoolName}
        certificationLink={schoolDegree.certificationLink}
        abbrExpantion={schoolDegree.abbrExpantion}
      />
    ))}
    <ChallengesLink
      href="https://github.com/melboudali/FreeCodeCamp"
      aria-label="Challenges & working projects"
      target="_blank"
      rel="noreferrer"
    >
      Click here to see all my FreeCodeCamp Challenges & working projects.
    </ChallengesLink>
  </SchoolDegreesWrapper>
);

const SchoolDegreeItem = ({ title, schoolName, certificationLink, abbrExpantion }: SchoolDegreeItemProps) => (
  <SchoolDegreeWrapper>
    <ScoolDegreeTitle>
      {title}
      {certificationLink && (
        <a href={certificationLink} target="_blank" aria-label="certification" rel="noreferrer">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6562 9.375H11.7188C11.5944 9.375 11.4752 9.42439 11.3873 9.51229C11.2994 9.6002 11.25 9.71943 11.25 9.84375V13.125H1.875V3.75H6.09375C6.21807 3.75 6.3373 3.70061 6.42521 3.61271C6.51311 3.5248 6.5625 3.40557 6.5625 3.28125V2.34375C6.5625 2.21943 6.51311 2.1002 6.42521 2.01229C6.3373 1.92439 6.21807 1.875 6.09375 1.875H1.40625C1.03329 1.875 0.675604 2.02316 0.411881 2.28688C0.148158 2.5506 0 2.90829 0 3.28125L0 13.5938C0 13.9667 0.148158 14.3244 0.411881 14.5881C0.675604 14.8518 1.03329 15 1.40625 15H11.7188C12.0917 15 12.4494 14.8518 12.7131 14.5881C12.9768 14.3244 13.125 13.9667 13.125 13.5938V9.84375C13.125 9.71943 13.0756 9.6002 12.9877 9.51229C12.8998 9.42439 12.7806 9.375 12.6562 9.375ZM14.2969 0H10.5469C9.9208 0 9.60791 0.759082 10.0488 1.20117L11.0956 2.24795L3.95508 9.38584C3.88953 9.45116 3.83752 9.52878 3.80203 9.61425C3.76654 9.69971 3.74827 9.79135 3.74827 9.88389C3.74827 9.97643 3.76654 10.0681 3.80203 10.1535C3.83752 10.239 3.88953 10.3166 3.95508 10.3819L4.61924 11.0449C4.68456 11.1105 4.76218 11.1625 4.84765 11.198C4.93311 11.2335 5.02474 11.2517 5.11729 11.2517C5.20983 11.2517 5.30146 11.2335 5.38692 11.198C5.47239 11.1625 5.55001 11.1105 5.61533 11.0449L12.7523 3.90586L13.7988 4.95117C14.2383 5.39062 15 5.08301 15 4.45312V0.703125C15 0.516645 14.9259 0.337802 14.7941 0.205941C14.6622 0.074079 14.4834 0 14.2969 0V0Z" />
          </svg>
        </a>
      )}
    </ScoolDegreeTitle>
    <SchollWrapper>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.375 5.00001V5.62501C19.375 5.70789 19.3421 5.78738 19.2835 5.84598C19.2249 5.90459 19.1454 5.93751 19.0625 5.93751H18.125V6.40626C18.125 6.66513 17.9151 6.87501 17.6562 6.87501H2.34375C2.08488 6.87501 1.875 6.66513 1.875 6.40626V5.93751H0.9375C0.85462 5.93751 0.775134 5.90459 0.716529 5.84598C0.657924 5.78738 0.625 5.70789 0.625 5.62501V5.00001C0.625 4.93819 0.643339 4.87775 0.677695 4.82635C0.712052 4.77495 0.760882 4.7349 0.818008 4.71126L9.88051 1.27376C9.95702 1.24208 10.043 1.24208 10.1195 1.27376L19.182 4.71126C19.2391 4.7349 19.2879 4.77495 19.3223 4.82635C19.3567 4.87775 19.375 4.93819 19.375 5.00001ZM18.4375 16.875H1.5625C1.04473 16.875 0.625 17.2947 0.625 17.8125V18.4375C0.625 18.5204 0.657924 18.5999 0.716529 18.6585C0.775134 18.7171 0.85462 18.75 0.9375 18.75H19.0625C19.1454 18.75 19.2249 18.7171 19.2835 18.6585C19.3421 18.5999 19.375 18.5204 19.375 18.4375V17.8125C19.375 17.2947 18.9553 16.875 18.4375 16.875ZM3.75 7.50001V15H2.34375C2.08488 15 1.875 15.2099 1.875 15.4688V16.25H18.125V15.4688C18.125 15.2099 17.9151 15 17.6562 15H16.25V7.50001H13.75V15H11.25V7.50001H8.75V15H6.25V7.50001H3.75Z" />
      </svg>
      <p>
        {schoolName} {abbrExpantion && <span>({abbrExpantion})</span>}
      </p>
    </SchollWrapper>
  </SchoolDegreeWrapper>
);

SchoolDegreeItem.propTypes = {
  title: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
  certificationLink: PropTypes.string,
  abbrExpantion: PropTypes.string,
};

export default SchoolDegree;
