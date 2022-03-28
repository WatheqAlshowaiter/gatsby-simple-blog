import React from 'react';
import PropTypes from 'prop-types';

// Utilities
import { kebabCase } from 'utils/helpers';

// Components
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Tag from 'components/Tag';
import Bio from 'components/Bio';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';
import { rhythm, scale } from 'utils/typography';
import { getImage, getSrc } from 'gatsby-plugin-image';

const styles = {
  tagListDiv: {
    marginLeft: '1.5rem',
    lineHeight: 3,
  },
};

const TagsPage = function ({ data, location }) {
  const { homeLink } = useLang();
  const tTags = formatMessage('tTags');
  const description = formatMessage('tDescription');
  const img = getImage(data.myImage);
  const imgAlt = img.alt ? img.alt : formatMessage('tImageAltTagsPage');

  return (
    <Layout
      location={location}
      title={data.site.siteMetadata.title}
      breadcrumbs={[{ text: tTags }]}
    >
      <Helmet title={tTags} />
      <SEO
        title={tTags}
        description={description}
        keywords={formatMessage('taIndKeywords')}
        image={img}
        imageAlt={imgAlt}
      />
      <div>
        <h1>{tTags}</h1>
        <div style={styles.tagListDiv}>
          {data.allMarkdownRemark.group.map((tag) => (
            <Tag
              key={tag.fieldValue}
              text={tag.fieldValue}
              count={tag.totalCount}
              url={`${homeLink}tags/${kebabCase(tag.fieldValue)}/`}
            />
          ))}
        </div>
      </div>
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

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
      }),
    }),
    myImage: PropTypes.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default TagsPage;

export const pageQuery = graphql`
  query TagsTotalPage($langKey: String) {
    site {
      siteMetadata {
        title
        lang
        siteUrl
      }
    }
    allMarkdownRemark(limit: 1000, filter: { fields: { langKey: { eq: $langKey } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    myImage: file(relativePath: { glob: "blog-card4.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
