import React, { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "./Modal";
import CustomLink from "./CustomLink";
import PropTypes from "prop-types";

const NavStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Logo = styled.h1`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  background: ${({ theme }) => `linear-gradient(92.01deg, ${theme.linearLeftColor} -14.07%, ${theme.linearRightColor} 102.13%)`};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const NavbarWrapper = styled.div`
  --navbarPadding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--navbarPadding);
  @media (min-width: 700px) {
    --navbarPadding: 10px 48px;
  }
`;

const Nav = styled.nav`
  ${NavStyle}
  button {
    width: 24px;
    height: 24px;
    &:nth-child(2) {
      svg > path {
        fill: ${({ theme }) => theme.balackAndWhite};
      }
    }
  }
`;

const LinkWrapper = styled.div`
  display: none;
  @media (min-width: 700px) {
    ${NavStyle}
  }
`;

const MenuButton = styled.button`
  --displayValue: block;
  display: var(--displayValue);
  svg > path {
    stroke: ${({ theme }) => theme.balackAndWhite};
  }
  @media (min-width: 700px) {
    --displayValue: none;
  }
`;

interface NavbarProps {
  themeToggler: () => void;
  theme: string;
}

const Navbar = ({ themeToggler, theme }: NavbarProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const Scrollbar = (arg: "show" | "hide") => {
    document.documentElement.style.overflowY = arg === "show" ? "visible" : "hidden";
  };

  const menuToggler = () => {
    setMenuIsOpen(!menuIsOpen);
    Scrollbar("hide");
  };

  return (
    <NavbarWrapper>
      {menuIsOpen && <Modal setMenuIsOpen={setMenuIsOpen} Scrollbar={Scrollbar} menuIsOpen={menuIsOpen} />}
      <Logo>{"< el boudali />"}</Logo>
      <Nav>
        <LinkWrapper>
          <CustomLink to="/" title="about" />
          <CustomLink to="/projects" title="projects" />
          <CustomLink to="/blog" title="blog" />
          <CustomLink to="/contact" title="contact" />
        </LinkWrapper>
        <button type="button" aria-label="theme toggler" onClick={themeToggler}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={
                theme === "dark"
                  ? "M12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5C10.8065 7.5 9.66193 7.97411 8.81802 8.81802C7.97411 9.66193 7.5 10.8065 7.5 12C7.5 13.1935 7.97411 14.3381 8.81802 15.182C9.66193 16.0259 10.8065 16.5 12 16.5V16.5ZM12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18V18ZM12 0C12.1989 0 12.3897 0.0790176 12.5303 0.21967C12.671 0.360322 12.75 0.551088 12.75 0.75V3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5C11.8011 4.5 11.6103 4.42098 11.4697 4.28033C11.329 4.13968 11.25 3.94891 11.25 3.75V0.75C11.25 0.551088 11.329 0.360322 11.4697 0.21967C11.6103 0.0790176 11.8011 0 12 0V0ZM12 19.5C12.1989 19.5 12.3897 19.579 12.5303 19.7197C12.671 19.8603 12.75 20.0511 12.75 20.25V23.25C12.75 23.4489 12.671 23.6397 12.5303 23.7803C12.3897 23.921 12.1989 24 12 24C11.8011 24 11.6103 23.921 11.4697 23.7803C11.329 23.6397 11.25 23.4489 11.25 23.25V20.25C11.25 20.0511 11.329 19.8603 11.4697 19.7197C11.6103 19.579 11.8011 19.5 12 19.5V19.5ZM24 12C24 12.1989 23.921 12.3897 23.7803 12.5303C23.6397 12.671 23.4489 12.75 23.25 12.75H20.25C20.0511 12.75 19.8603 12.671 19.7197 12.5303C19.579 12.3897 19.5 12.1989 19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25H23.25C23.4489 11.25 23.6397 11.329 23.7803 11.4697C23.921 11.6103 24 11.8011 24 12ZM4.5 12C4.5 12.1989 4.42098 12.3897 4.28033 12.5303C4.13968 12.671 3.94891 12.75 3.75 12.75H0.75C0.551088 12.75 0.360322 12.671 0.21967 12.5303C0.0790176 12.3897 0 12.1989 0 12C0 11.8011 0.0790176 11.6103 0.21967 11.4697C0.360322 11.329 0.551088 11.25 0.75 11.25H3.75C3.94891 11.25 4.13968 11.329 4.28033 11.4697C4.42098 11.6103 4.5 11.8011 4.5 12ZM20.4855 3.5145C20.6261 3.65515 20.7051 3.84588 20.7051 4.04475C20.7051 4.24362 20.6261 4.43435 20.4855 4.575L18.3645 6.6975C18.2948 6.76713 18.212 6.82235 18.1209 6.86C18.0299 6.89765 17.9323 6.91699 17.8337 6.91692C17.6347 6.91678 17.4439 6.83758 17.3032 6.69675C17.2336 6.62702 17.1784 6.54425 17.1408 6.45318C17.1031 6.36211 17.0838 6.26452 17.0838 6.16597C17.084 5.96695 17.1632 5.77613 17.304 5.6355L19.425 3.5145C19.5656 3.3739 19.7564 3.29491 19.9553 3.29491C20.1541 3.29491 20.3449 3.3739 20.4855 3.5145V3.5145ZM6.696 17.304C6.8366 17.4446 6.91559 17.6354 6.91559 17.8342C6.91559 18.0331 6.8366 18.2239 6.696 18.3645L4.575 20.4855C4.43355 20.6221 4.2441 20.6977 4.04745 20.696C3.8508 20.6943 3.66269 20.6154 3.52364 20.4764C3.38458 20.3373 3.3057 20.1492 3.30399 19.9526C3.30229 19.7559 3.37788 19.5665 3.5145 19.425L5.6355 17.304C5.77615 17.1634 5.96688 17.0844 6.16575 17.0844C6.36462 17.0844 6.55535 17.1634 6.696 17.304V17.304ZM20.4855 20.4855C20.3449 20.6261 20.1541 20.7051 19.9553 20.7051C19.7564 20.7051 19.5656 20.6261 19.425 20.4855L17.304 18.3645C17.1674 18.223 17.0918 18.0336 17.0935 17.8369C17.0952 17.6403 17.1741 17.4522 17.3131 17.3131C17.4522 17.1741 17.6403 17.0952 17.8369 17.0935C18.0336 17.0918 18.223 17.1674 18.3645 17.304L20.4855 19.425C20.6261 19.5656 20.7051 19.7564 20.7051 19.9553C20.7051 20.1541 20.6261 20.3449 20.4855 20.4855ZM6.696 6.6975C6.55535 6.8381 6.36462 6.91709 6.16575 6.91709C5.96688 6.91709 5.77615 6.8381 5.6355 6.6975L3.5145 4.575C3.44287 4.50581 3.38573 4.42306 3.34642 4.33155C3.30712 4.24005 3.28643 4.14164 3.28556 4.04205C3.2847 3.94247 3.30367 3.84371 3.34138 3.75153C3.37909 3.65936 3.43478 3.57562 3.5052 3.5052C3.57562 3.43478 3.65936 3.37909 3.75153 3.34138C3.84371 3.30367 3.94247 3.2847 4.04205 3.28556C4.14164 3.28643 4.24005 3.30712 4.33155 3.34642C4.42306 3.38573 4.50581 3.44287 4.575 3.5145L6.696 5.6355C6.76585 5.70517 6.82126 5.78793 6.85907 5.87905C6.89688 5.97017 6.91634 6.06785 6.91634 6.1665C6.91634 6.26515 6.89688 6.36283 6.85907 6.45395C6.82126 6.54507 6.76585 6.62783 6.696 6.6975V6.6975Z"
                  : "M21.795 15.795C19.8966 16.5316 17.8249 16.7002 15.8324 16.2804C13.8398 15.8606 12.0123 14.8705 10.5724 13.4306C9.13253 11.9907 8.1424 10.1632 7.72259 8.17063C7.30279 6.17807 7.47143 4.10643 8.20798 2.20801C5.92764 3.09668 4.02917 4.75369 2.84034 6.89293C1.65152 9.03218 1.24696 11.5194 1.69653 13.9251C2.14609 16.3309 3.42155 18.5041 5.3027 20.0697C7.18385 21.6352 9.5526 22.4948 12 22.5C14.1184 22.5006 16.1874 21.8605 17.9355 20.6639C19.6836 19.4673 21.0289 17.7701 21.795 15.795V15.795Z"
              }
            />
          </svg>
        </button>
        <MenuButton type="button" aria-label="menu" onClick={menuToggler}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L22 5" strokeWidth="3" strokeLinecap="round" />
            <path d="M8 12L22 12" strokeWidth="3" strokeLinecap="round" />
            <path d="M14 19L22 19" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </MenuButton>
      </Nav>
    </NavbarWrapper>
  );
};

Navbar.prototype = {
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Navbar;
