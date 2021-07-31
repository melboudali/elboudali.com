import React from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import { useDarkMode } from "../../hook/useDarkMode";
import Navbar from "../common/navbar";
import { lightTheme } from "../../themes/light";
import { darkTheme } from "../../themes/dark";
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
  children: object | React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, themeToggler, componentMounted } = useDarkMode();

  //TODO: add loading component
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <Header>
        <Navbar themeToggler={themeToggler} theme={theme} />
      </Header>
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
