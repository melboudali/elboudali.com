import { Maybe, Mdx, MdxFrontmatter } from "../../gatsby-graphql";

export type MDXType = Pick<Mdx, "id" | "timeToRead" | "excerpt"> & {
  fields?: Maybe<Pick<MdxFields, "slug">>;
  frontmatter?: Maybe<
    Pick<MdxFrontmatter, "title" | "summary" | "tags" | "date"> & { cover?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, "gatsbyImageData">> }> }
  >;
};
