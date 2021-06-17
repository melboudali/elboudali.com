import { Repo } from "../../gatsby-graphql";

export interface selectedProjectType {
  project_name: string;
  project_title: string;
  project_cover: string;
  project_startDate: string;
  project_endDate: string;
  project_topis: string[];
  project_figmaLink: string;
}

export type repoType = Pick<
  Repo,
  "id" | "name" | "description" | "forks_count" | "stargazers_count" | "html_url" | "language" | "homepage" | "created_at"
> & {
  fromNow: Repo["created_at"];
};

export type cardRepoType = Pick<
  Repo,
  "name" | "description" | "forks_count" | "stargazers_count" | "html_url" | "language" | "homepage" | "created_at"
> & {
  fromNow: Repo["created_at"];
};

export type fullCardRepoType = Pick<
  Repo,
  "name" | "description" | "forks_count" | "stargazers_count" | "html_url" | "language" | "homepage" | "created_at"
> & {
  fromNow: Repo["created_at"];
} & selectedProjectType;

export type coverType = Pick<File, "relativePath"> & {
  childImageSharp?: Maybe<Pick<ImageSharp, "gatsbyImageData">> | undefined;
};
