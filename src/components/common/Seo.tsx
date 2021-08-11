import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { MetaDataQuery } from "../../../gatsby-graphql";

interface SeoProps {
  title?: string;
  image?: string;
  description?: string;
  children?: React.ReactNode;
  location?: string;
  type: "website" | "article";
}

const Seo = ({ title, image, description, children, location, type }: SeoProps) => {
  const { site }: MetaDataQuery = useStaticQuery(graphql`
    query metaData {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          defaultImage: image
          siteUrl
          twitter
        }
      }
    }
  `);

  const seo = {
    title: title || site?.siteMetadata?.defaultTitle,
    description: description || site?.siteMetadata?.defaultDescription,
    image: `${site?.siteMetadata?.siteUrl}${image || site?.siteMetadata?.defaultImage}`,
    siteUrl: `${site?.siteMetadata?.siteUrl}${location}` || site?.siteMetadata?.siteUrl,
  };

  return (
    <Helmet title={seo.title!}>
      <meta name="description" content={seo.description!} />
      {seo.image && <meta name="image" content={seo.image} />}

      <meta property="og:url" content={seo.siteUrl!} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title!} />
      <meta property="og:description" content={seo.description!} />
      {image && <meta property="og:image" content={seo.image} />}
      <meta
        property="fb:app_id"
        content="3820447614661427
"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site?.siteMetadata?.twitter!} />
      <meta name="twitter:title" content={seo.title!} />
      <meta name="twitter:description" content={seo.description!} />
      {image && <meta name="twitter:image" content={seo.image} />}
      <html lang="en" dir="ltr" />
      <link rel="canonical" href={seo.siteUrl!} />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.string,
  children: PropTypes.node,
  location: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Seo.defaultProps = {
  type: "website",
};

export default Seo;
