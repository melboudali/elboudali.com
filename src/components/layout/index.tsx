import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import { useDarkMode } from "../../hook/useDarkMode";
import { lightTheme } from "../../themes/light";
import { darkTheme } from "../../themes/dark";
import Navbar from "../common/navbar";
import PropTypes from "prop-types";

const Header = styled.header`
  background-color: ${({ theme }) => theme.navbarBackground};
  box-shadow: 0px 3px 8px -2px var(--navbarBoxShadow);
`;

const Main = styled.main`
  --mainPadding: 0 11px;
  max-width: 1280px;
  margin: 50px auto;
  padding: var(--mainPadding);
  @media (min-width: 750px) {
    --mainPadding: 0 48px;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, themeToggler } = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header>
        <Navbar themeToggler={themeToggler} theme={theme} />
      </Header>
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

Layout.propTypes = { children: PropTypes.node };

export default Layout;
