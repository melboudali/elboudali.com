import { Repo } from "../../gatsby-graphql";

export const getAllReposStars = (
  repos: Pick<Repo, "name" | "created_at" | "description" | "forks_count" | "html_url" | "stargazers_count" | "language" | "homepage">[]
) => {
  let sum = 0;
  repos.map(repo => (sum += repo.stargazers_count!));
  return sum;
};

export const getSelectedProjects = () => {};

export const getSelectedProject = () => {};
