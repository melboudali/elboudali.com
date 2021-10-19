import about from "./src/data/about";
import config from "./src/data/config";
import { AllMdxQueryType, NodeType } from "./src/types/blog";

const titleAndDesc = `${about.fullName} | RSS`;

export default {
  siteMetadata: {
    title: config.title,
    description: about.summary.long[0],
    image: config.featuredImage,
    siteUrl: config.siteUrl,
    twitter: about.socialLinks.twitterId,
    fbid: config.fbid,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-autolink-headers`,
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
        path: `${__dirname}/src/assets/others/`,
        name: "others",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images/projects`,
        name: "projects",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: { placeholder: "blurred" },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images-medium-zoom",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-prismjs",
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              icon: `<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>`,
              elements: [`h1`, `h2`],
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              rel: "nofollow",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `standalone`,
        icon: config.icon,
        cache_busting_mode: "none",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [config.googleAnalyticsTrackingID],
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: ({
              query: {
                allMdx: { nodes },
              },
            }: AllMdxQueryType) => {
              return nodes.map((node: NodeType) => ({
                title: node.frontmatter.title,
                description: node.frontmatter.summary,
                url: config.siteUrl + node.fields?.slug,
                guid: config.siteUrl + node.fields?.slug,
                date: node.frontmatter.date,
              }));
            },
            query: `{
							  allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
                  nodes{
                    frontmatter {
                      title
                      summary
                      date(formatString: "dddd, DD MMMM YYYY")
                    }
                    fields {
                      slug
                    }
                  }
                }
						}`,
            output: "/rss.xml",
            title: titleAndDesc,
            description: titleAndDesc,
          },
        ],
      },
    },
  ],
};
