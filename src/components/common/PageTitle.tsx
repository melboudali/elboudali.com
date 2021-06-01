import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProfileName = styled.h1`
  --fontSize: 1.8rem;
  font-size: var(--fontSize);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.titleColor};
  @media (min-width: 375px) {
    --fontSize: 1.875rem;
  }
`;

interface PageTitleProps {
  children: string;
}

const PageTitle = ({ children }: PageTitleProps) => <ProfileName>{children}</ProfileName>;

PageTitle.propTypes = { children: PropTypes.string.isRequired };

export default PageTitle;
