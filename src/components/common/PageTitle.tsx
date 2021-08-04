import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PageTitleWrapper = styled.h1`
  --fontSize: 1.8rem;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
  font-size: var(--fontSize);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  line-height: 35px;
  color: ${({ theme }) => theme.titleColor};
  @media (min-width: 375px) {
    --fontSize: 1.875rem;
  }
`;

const ItemsCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  font-size: 0.6875rem;
  letter-spacing: normal;
  line-height: 13px;
  color: ${({ theme }) => theme.balackAndWhite};
  border-radius: 5px;
  background: ${({ theme }) => theme.emailBorder};
`;

interface PageTitleProps {
  children: string;
  ItemsCountNumber: number;
}

const PageTitle = ({ children, ItemsCountNumber }: PageTitleProps) => (
  <PageTitleWrapper>
    {children}
    {!!ItemsCountNumber && <ItemsCount>{ItemsCountNumber}</ItemsCount>}
  </PageTitleWrapper>
);

PageTitle.defaultProps = {
  ItemsCountNumber: 0,
};

PageTitle.propTypes = { children: PropTypes.string.isRequired, ItemsCountNumber: PropTypes.number.isRequired };

export default PageTitle;
