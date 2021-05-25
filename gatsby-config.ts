import config from "./src/data/config";

export default {
  siteMetadata: {
    title: config.title,
    titleTemplate: `%s · ${config.title}`,
    description: config.desciption,
    image: "/thumbnail.jpg",
    siteUrl: config.siteUrl,
    twitter: config.socialLinks.twitterId,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", `gatsby-plugin-image`, `gatsby-plugin-sharp`],
};
