import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../common/Navbar";
import GlobalStyles from "../../styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../common/Themes";
import PropTypes from "prop-types";
import { useDarkMode } from "../../hook/useDarkMode";

const Header = styled.header`
  background-color: ${({ theme }) => theme.navbarBackground};
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  max-width: 1280px;
  padding: 0 48px;
  margin: 50px auto;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, themeToggler } = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
        <Header>
          <Navbar themeToggler={themeToggler} theme={theme} />
        </Header>
        <Main>{children}</Main>
        {/* <Footer /> */}
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
