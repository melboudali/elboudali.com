import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { MetaDataQuery } from "../../../gatsby-graphql";
import about from "../../data/about";

interface SeoProps {
  title?: string;
  image?: string;
  description?: string;
  children?: React.ReactNode;
  location?: string;
  type: "website" | "article";
}

const Seo = ({ title, image, description, location, type }: SeoProps) => {
  const { site }: MetaDataQuery = useStaticQuery(graphql`
    query metaData {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          defaultImage: image
          siteUrl
          twitter
          fbid
        }
      }
    }
  `);

  const seo = {
    title: title ? (type === "article" ? title : `${about.fullName} | ${title}`) : site?.siteMetadata?.defaultTitle,
    description: description || site?.siteMetadata?.defaultDescription,
    image: `${site?.siteMetadata?.siteUrl}${image || site?.siteMetadata?.defaultImage}`,
    siteUrl: `${site?.siteMetadata?.siteUrl}${location || ""}`,
  };

  return (
    <Helmet title={seo.title!}>
      <html lang="en" dir="ltr" />
      <link rel="canonical" href={seo.siteUrl!} />
      <link rel="preload" as="font" />
      <meta name="description" content={seo.description!} />
      {seo.image && <meta name="image" content={seo.image} />}

      <meta property="og:url" content={seo.siteUrl!} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title!} />
      <meta property="og:description" content={seo.description!} />
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="fb:app_id" content={site?.siteMetadata?.fbid!} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site?.siteMetadata?.twitter!} />
      <meta name="twitter:title" content={seo.title!} />
      <meta name="twitter:description" content={seo.description!} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.string,
  location: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Seo.defaultProps = {
  type: "website",
};

export default Seo;
