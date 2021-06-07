import about from "./src/data/about";

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
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",

    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: { placeholder: "blurred" },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "others",
        path: `${__dirname}/src/assets/others/`,
      },
    },
  ],
};
