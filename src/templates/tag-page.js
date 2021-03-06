/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostAbbrev from 'components/PostAbbrev';
import Bio from 'components/Bio';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';
import { rhythm, scale } from 'utils/typography';
import { getImage, getSrc } from 'gatsby-plugin-image';

const TagPageTemplate = function ({ pageContext, data, location }) {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  const { lang, homeLink } = useLang();

  const tagHeader = formatMessage('tfTagHeader', totalCount, tag);

  const description = data.site.siteMetadata.description
    ? data.site.siteMetadata.description
    : formatMessage('tDescription');

  const img = getImage(data.myImage);
  const imgAlt = img.alt ? img.alt : formatMessage('tImageAltTagPage');

  return (
    <Layout
      location={location}
      title={siteTitle}
      breadcrumbs={[{ text: formatMessage('tTags'), url: `${homeLink}tags` }, { text: tag }]}
    >
      <SEO
        title={tagHeader}
        description={description}
        keywords={formatMessage('taIndKeywords')}
        image={img}
        imageAlt={imgAlt}
      />
      <h1>{tagHeader}</h1>
      <main>
        {edges.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <PostAbbrev
              key={node.fields.slug}
              base={homeLink}
              lang={lang}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              timeToRead={node.timeToRead}
              title={title}
            />
          );
        })}
      </main>
      <div style={{ marginTop: 50 }} />
      <aside>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </aside>
    </Layout>
  );
};

TagPageTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
              langKey: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default TagPageTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String, $langKey: String) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } }, fields: { langKey: { eq: $langKey } } }
    ) {
      totalCount
      edges {
        node {
          timeToRead
          fields {
            slug
            langKey
          }
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            description
          }
        }
      }
    }
    myImage: file(relativePath: { glob: "blog-card4.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
