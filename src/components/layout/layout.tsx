import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

const WidthAndMargin = css`
  max-width: 1280px;
  padding: 0 48px;
  margin: 0 auto;
`;

const Header = styled.header`
  ${WidthAndMargin}
`;

const Main = styled.main`
  ${WidthAndMargin}
`;

const Logo = styled.h1`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: linear-gradient(92.01deg, #2188ff -14.07%, #db469f 102.13%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const CustomLink = styled(Link)``;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Navbar>
          <Logo>{"< el boudali />"}</Logo>
          <Nav>
            <Link to="/">about</Link>
            <Link to="projects">projects</Link>
            <Link to="blog">blog</Link>
            <Link to="contact">contact</Link>
            <button type="button">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.795 13.795C18.8966 14.5316 16.8249 14.7002 14.8324 14.2804C12.8398 13.8606 11.0123 12.8705 9.57241 11.4306C8.13253 9.99069 7.1424 8.16319 6.72259 6.17063C6.30279 4.17807 6.47143 2.10643 7.20798 0.208008C4.92764 1.09668 3.02917 2.75369 1.84034 4.89293C0.651517 7.03218 0.246962 9.51939 0.696526 11.9251C1.14609 14.3309 2.42155 16.5041 4.3027 18.0697C6.18385 19.6352 8.5526 20.4948 11 20.5C13.1184 20.5006 15.1874 19.8605 16.9355 18.6639C18.6836 17.4673 20.0289 15.7701 20.795 13.795Z"
                  fill="black"
                />
              </svg>
            </button>
          </Nav>
        </Navbar>
      </Header>
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
