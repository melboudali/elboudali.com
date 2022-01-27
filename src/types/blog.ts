import { ImageSharp, Maybe, Mdx, MdxFields, MdxFrontmatter } from "../../gatsby-graphql";

export type MDXType = Pick<Mdx, "id" | "timeToRead" | "excerpt"> & {
  fields?: Maybe<Pick<MdxFields, "slug">>;
  frontmatter?: Maybe<
    Pick<MdxFrontmatter, "title" | "summary" | "tags" | "date"> & {
      cover?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, "gatsbyImageData">> }>;
    }
  >;
};

export interface AllMdxQueryType {
  query: { allMdx: { nodes: Mdx[] } };
}

export type NodeType = Mdx;
