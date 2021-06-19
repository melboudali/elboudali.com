import { Repo } from "../../gatsby-graphql";

export interface selectedProjectType {
  project_name: string;
  project_title: string;
  project_cover: string;
  project_topis: string[];
  project_figmaLink: string;
}

export type cardRepoType = Pick<
  Repo,
  "name" | "description" | "forks_count" | "stargazers_count" | "html_url" | "language" | "homepage" | "created_at" | "pushed_at"
>;

export type repoType = Pick<"id" & cardRepoType>;

export type fullCardRepoType = cardRepoType & selectedProjectType;

export type coverType = Pick<File, "relativePath"> & {
  childImageSharp?: Maybe<Pick<ImageSharp, "gatsbyImageData">> | undefined;
};
