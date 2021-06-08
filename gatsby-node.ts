import path from "path";
import fetch from "isomorphic-fetch";
import { SourceNodesArgs } from "gatsby";

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

exports.sourceNodes = async (params: SourceNodesArgs): Promise<void> => {
  // Fetching external API
  await Promise.all([fetchGithubReposAndTurnToNodes(params)]);
};

// exports.createPages = async params => {
//   await Promise.all([turnPizzasIntoPages(params), turnToppingsIntoPages(params), turnSliceKingsIntoPages(params)]);
// };
