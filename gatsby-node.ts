import path from "path";
import fetch from "isomorphic-fetch";
import { CreateNodeArgs, CreatePagesArgs, SourceNodesArgs } from "gatsby";
import { CreatePostPagesQuery, Maybe, MdxFields } from "./gatsby-graphql";
import { createFilePath } from "gatsby-source-filesystem";

const fetchGithubReposAndTurnToNodes = async (args: SourceNodesArgs) => {
  const { actions, createNodeId, createContentDigest } = args;
  const res = await fetch("https://api.github.com/users/melboudali/repos?sort=%22created%22");
  const repos = await res.json();
  for (const repo of repos) {
    const nodeMeta = {
      id: createNodeId(`repo-${repo.name}`),
      parent: null,
      children: [],
      internal: {
        type: "Repo",
        mediaType: "application/json",
        contentDigest: createContentDigest(repo),
      },
    };
    actions.createNode({
      ...repo,
      ...nodeMeta,
    });
  }
};

exports.onCreateNode = (args: CreateNodeArgs): void => {
  // Create a slug field for markdown post nodes.
  const { actions, node, getNode } = args;
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: `/blog${slug}`,
    });
  }
};

interface resType {
  data?: CreatePostPagesQuery;
}

interface postType {
  fields?: Maybe<Pick<MdxFields, "slug">>;
}

const turnPostsIntoPages = async (args: CreatePagesArgs) => {
  const { actions, graphql } = args;
  const postTemplate = path.resolve("./src/templates/Post.tsx");
  const res: resType = await graphql(`
    query createPostPages {
      posts: allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  res.data?.posts.nodes.forEach((post: postType) => {
    actions.createPage({
      path: post.fields?.slug!,
      component: postTemplate,
      context: { slug: post.fields?.slug! },
    });
  });
};

exports.sourceNodes = async (params: SourceNodesArgs): Promise<void> => {
  // Fetching external API
  await Promise.all([fetchGithubReposAndTurnToNodes(params)]);
};

exports.createPages = async (params: CreatePagesArgs) => {
  await Promise.all([turnPostsIntoPages(params)]);
};
