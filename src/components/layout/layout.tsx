import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import PropTypes from "prop-types";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <header>
        {/* <Navbar /> */}
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </header>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
