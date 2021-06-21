import { Repo } from "../../gatsby-graphql";

export interface selectedProjectType {
  project_name: string;
  project_title: string;
  project_cover: string;
  project_topis: project_topics_type[];
  project_figmaLink: string;
}

export type project_topics_type = Partial<
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "gatsby"
  | "next"
  | "styled-components"
  | "material-ui"
  | "bootstrap"
  | "chartjs"
  | "sass"
  | "mapbox"
  | "redux"
  | "redux-saga"
  | "graphql"
  | "apollo"
  | "jest"
  | "firebase"
  | "express"
  | "redis"
  | "mongodb"
  | "postgresql"
  | "markdown"
  | "nodejs"
  | "heroku"
  | "vercel"
  | "netlify"
  | "figma"
  | "stripe"
>;

export type cardRepoType = Pick<
  Repo,
  "name" | "description" | "forks_count" | "stargazers_count" | "html_url" | "language" | "homepage" | "created_at" | "pushed_at"
>;

export type repoType = Pick<"id" & cardRepoType>;

export type fullCardRepoType = cardRepoType & selectedProjectType;

export type coverType = Pick<File, "relativePath"> & {
  childImageSharp?: Maybe<Pick<ImageSharp, "gatsbyImageData">> | undefined;
};
