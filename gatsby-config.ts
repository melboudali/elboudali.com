import { GatsbyConfig } from "gatsby";

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: "< elboudali />",
    titleTemplate: "%s · < elboudali />",
    description: "< elboudali />",
    image: "/thumbnail.jpg",
    siteUrl: "https://elboudali.com",
    twitter: "@moelboudali",
  },
  plugins: ["gatsby-plugin-styled-components"],
};

export default gatsbyConfig;
