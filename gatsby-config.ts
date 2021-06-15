import about from "./src/data/about";
import path from "path";

export default {
  siteMetadata: {
    title: "< el boudali />",
    titleTemplate: `%s · < el boudali />`,
    description: about.summary.long[0],
    image: "/thumbnail.jpg",
    siteUrl: about.siteUrl,
    twitter: about.socialLinks.twitterId,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: { placeholder: "blurred" },
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./gatsby-graphql.ts`,
        documentPaths: ["./src/**/*.{ts,tsx}", "./node_modules/gatsby-*/**/*.js", "./gatsby-node.ts"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "others",
        path: `${__dirname}/src/assets/others/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `assets`, `images`, `projects`),
      },
    },
  ],
};
