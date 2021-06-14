import React from "react";
import { Helmet } from "react-helmet";
import { useDarkMode } from "../../hook/useDarkMode";
import Navbar from "../common/navbar";
import GlobalStyles from "../../styles/GlobalStyles";
import { lightTheme, darkTheme } from "../../themes";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const Header = styled.header`
  background-color: ${({ theme }) => theme.navbarBackground};
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.1);
  transition: background-color 5ms linear;
`;

const Main = styled.main`
  --mainPadding: 0 11px;
  max-width: 1280px;
  padding: var(--mainPadding);
  margin: 50px auto;
  @media (min-width: 700px) {
    --mainPadding: 0 48px;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
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
