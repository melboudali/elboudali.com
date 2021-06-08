import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PageTitleWrapper = styled.h1`
  --fontSize: 1.8rem;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: var(--fontSize);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.titleColor};
  @media (min-width: 375px) {
    --fontSize: 1.875rem;
  }
`;

const ItemsCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  border-radius: 5px;
  padding: 2px 4px;
  letter-spacing: normal;
  background: ${({ theme }) => theme.emailBorder};
  color: ${({ theme }) => theme.balackAndWhite};
`;

interface PageTitleProps {
  children: string;
  ItemsCountNumber?: number;
}

const PageTitle = ({ children, ItemsCountNumber = 0 }: PageTitleProps) => (
  <PageTitleWrapper>
    {children}
    {!!ItemsCountNumber && <ItemsCount>{ItemsCountNumber}</ItemsCount>}
  </PageTitleWrapper>
);

PageTitle.propTypes = { children: PropTypes.string.isRequired, ItemsCountNumber: PropTypes.number };

export default PageTitle;
