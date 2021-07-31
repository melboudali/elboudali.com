import { Repo } from "../../gatsby-graphql";

export interface selectedProjectType {
  project_name: string;
  project_title: string;
  project_cover: string;
  project_topics: project_topics_type[];
  project_figmaLink: string;
}

export type project_topics_type = Partial<
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Gatsby"
  | "Next"
  | "StyledComponents"
  | "MaterialUI"
  | "Bootstrap"
  | "ChartJS"
  | "SASS"
  | "Mapbox"
  | "Redux"
  | "ReduxSaga"
  | "GraphQL"
  | "Apollo"
  | "Jest"
  | "Firebase"
  | "Redis"
  | "MongoDB"
  | "PostgreSQL"
  | "Markdown"
  | "Express"
  | "NodeJS"
  | "Heroku"
  | "Vercel"
  | "Netlify"
  | "GithubPages"
  | "Cloudinary"
  | "Figma"
  | "Stripe"
>;

export type cardRepoType = Pick<Repo, "name" | "description" | "stargazers_count" | "html_url" | "homepage" | "created_at" | "pushed_at">;

export type repoType = Pick<"id" & cardRepoType>;

export type fullCardRepoType = cardRepoType & selectedProjectType;

export type coverType = Pick<File, "relativePath"> & {
  childImageSharp?: Maybe<Pick<ImageSharp, "gatsbyImageData">> | undefined;
};
