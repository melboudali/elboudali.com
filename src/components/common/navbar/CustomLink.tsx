import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomLinkWrapper = styled(Link)`
  --customLinkFont: 2rem;
  --customLinkLetterSpacing: 6px;
  position: relative;
  font-size: var(--customLinkFont);
  letter-spacing: var(--customLinkLetterSpacing);
  text-transform: uppercase;
  color: ${({ theme }) => theme.navColor};
  &.active {
    font-weight: bold;
  }
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    left: -1px;
    bottom: -3px;
    background-color: ${({ theme }) => theme.navColor};
    opacity: 0;
    transition: width 1s, opacity 1s;
  }
  &:hover::before {
    opacity: 1;
    width: 100%;
  }
  @media (min-width: 750px) {
    --customLinkFont: 0.75rem;
    --customLinkLetterSpacing: 1.6px;
  }
`;

interface CustomLinkProps {
  to: string;
  title: string;
  closeModal?: () => void;
  menuIsOpen?: boolean;
}

const CustomLink = ({ to, title, closeModal, menuIsOpen }: CustomLinkProps) => (
  <CustomLinkWrapper
    to={to}
    aria-label={title}
    title={title}
    activeClassName="active"
    onClick={() => {
      if (menuIsOpen && closeModal) {
        closeModal();
      }
    }}
  >
    {title}
  </CustomLinkWrapper>
);

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
  menuIsOpen: PropTypes.bool,
};

export default CustomLink;
