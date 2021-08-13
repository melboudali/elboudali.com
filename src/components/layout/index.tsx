import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import { useDarkMode } from "../../hook/useDarkMode";
import { lightTheme } from "../../themes/light";
import { darkTheme } from "../../themes/dark";
import Navbar from "../common/navbar";
import PropTypes from "prop-types";
import useNavbar from "../../hook/useNavbar";

const Header = styled.header<{ showNav: boolean; scrollDown: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.navbarBackground};
  box-shadow: 0px 3px 8px -2px var(--navbarBoxShadow);
  transition: all 0.3s;
  transform: ${({ showNav, scrollDown }) => !showNav && (scrollDown ? "translate3d(0, 0, 0)" : "translate3d(0, -47px, 0)")};
`;

const Main = styled.main`
  --mainPadding: 94px 11px 50px;
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--mainPadding);
  @media (min-width: 750px) {
    --mainPadding: 94px 48px 50px;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, themeToggler } = useDarkMode();
  const { showNav, scrollDown } = useNavbar(47);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header showNav={showNav} scrollDown={scrollDown}>
        <Navbar themeToggler={themeToggler} theme={theme} />
      </Header>
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

Layout.propTypes = { children: PropTypes.node };

export default Layout;
