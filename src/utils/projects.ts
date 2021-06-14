import { Repo } from "../../gatsby-graphql";

type reposType = (Pick<
  Repo,
  "id" | "name" | "description" | "forks_count" | "stargazers_count" | "html_url" | "language" | "homepage" | "created_at"
> & {
  fromNow: Repo["created_at"];
})[];

export const getAllReposStars = (repos: reposType) => {
  let sum = 0;
  repos.map(repo => (sum += repo.stargazers_count!));
  return sum;
};

export const sortProjects = (repos: reposType, sortBy: string) => {
  if (sortBy === "stargazers_count") {
    return repos.sort((a, b) => b.stargazers_count! - a.stargazers_count!);
  }
  return repos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
};

export const getSelectedProjects = () => {};

export const getSelectedProject = () => {};
