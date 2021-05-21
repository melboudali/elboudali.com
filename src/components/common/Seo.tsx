import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

interface SeoProps {
  title?: string;
  image?: string;
  description?: string;
  children?: React.ReactNode;
  location?: string;
}

const Seo = ({ title, image, description, children, location }: SeoProps) => {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        defaultImage,
        siteUrl,
        twitter,
      },
    },
  } = useStaticQuery(query);

  const seo = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    image: image ?? defaultImage,
    siteUrl: location ?? siteUrl,
  };

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.title && <meta property="og:site_name" content={seo.title} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="image" content={seo.image} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      {children}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.string,
  children: PropTypes.node,
  location: PropTypes.string,
};

export default Seo;

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        defaultImage: image
        siteUrl
        twitter
      }
    }
  }
`;
