import { Repo } from "../../gatsby-graphql";

export interface selectedProjectType {
  project_name: string;
  project_title: string;
  project_cover: string;
  project_topics: project_topics_type[];
  project_last_commit: string;
  project_figmaLink?: string;
}

export type project_topics_type = Partial<
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Gatsby"
  | "Next"
  | "Styled Components"
  | "MaterialUI"
  | "Bootstrap"
  | "ChartJS"
  | "SASS"
  | "Mapbox"
  | "Redux"
  | "Redux Saga"
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
  | "Github Pages"
  | "Cloudinary"
  | "Figma"
  | "Stripe"
  | "GitHub"
  | "GitHub Actions"
>;

export type cardRepoType = Pick<Repo, "name" | "description" | "stargazers_count" | "html_url" | "homepage" | "created_at" | "pushed_at">;

export type repoType = Pick<"id" & cardRepoType>;

export type fullCardRepoType = cardRepoType & selectedProjectType;

export type coverType = Pick<File, "relativePath"> & {
  childImageSharp?: Maybe<Pick<ImageSharp, "gatsbyImageData">> | undefined;
};
