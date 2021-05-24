export default {
  siteMetadata: {
    title: "< elboudali />",
    titleTemplate: "%s · < elboudali />",
    description: "< elboudali />",
    image: "/thumbnail.jpg",
    siteUrl: "https://elboudali.com",
    twitter: "@moelboudali",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", `gatsby-plugin-image`, `gatsby-plugin-sharp`],
};
