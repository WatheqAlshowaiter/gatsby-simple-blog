/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLang } from 'context/LanguageContext';
import { getImage, getSrc } from 'gatsby-plugin-image';

const SEO = function ({ description, meta, keywords, title, image, imageAlt }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
            siteUrl
          }
        }
      }
    `,
  );

  const { lang } = useLang();

  const metaDescription = description || site.siteMetadata.description;

  const img = getImage(image);
  const imgSrc = site.siteMetadata.siteUrl + getSrc(img);

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || site.siteMetadata.lang,
        prefix: 'og: http://ogp.me/ns#',
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imgSrc,
        },
        {
          name: `og:image:alt`,
          content: imageAlt,
        },
        {
          property: 'og:image:width',
          content: parseInt(image?.width, 10),
        },
        {
          property: 'og:image:height',
          content: parseInt(image?.height, 10),
        },

        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: imgSrc,
        },
        {
          name: `twitter:image:alt`,
          content: imageAlt,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        .concat(meta)}
    />
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,

  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  meta: [],
  keywords: [],
  description: '',
};

export default SEO;
