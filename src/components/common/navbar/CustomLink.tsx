import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const CustomLinkWrapper = styled(Link)`
  --customLinkFont: 2rem;
  --customLinkLetterSpacing: 6px;
  position: relative;
  font-size: var(--customLinkFont);
  letter-spacing: var(--customLinkLetterSpacing);
  text-transform: uppercase;
  color: ${({ theme }) => theme.navColor};
  &[aria-current="page"] {
    font-weight: bold;
  }
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    left: -1px;
    bottom: -3px;
    opacity: 0;
    background-color: ${({ theme }) => theme.navColor};
    transition: width 1s, opacity 1s;
  }
  &:hover::before {
    opacity: 1;
    width: 100%;
  }
  @media (min-width: 700px) {
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

const CustomLink = ({ to, title, closeModal, menuIsOpen }: CustomLinkProps) => {
  const onClickFunction = () => {
    if (menuIsOpen && closeModal) {
      closeModal();
    }
  };

  return (
    <CustomLinkWrapper to={to} aria-label={title} title={title} onClick={onClickFunction}>
      {title}
    </CustomLinkWrapper>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
  menuIsOpen: PropTypes.bool,
};

export default CustomLink;
