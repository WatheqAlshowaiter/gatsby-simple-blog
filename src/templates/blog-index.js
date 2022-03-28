import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostAbbrev from 'components/PostAbbrev';
import Pagination from 'components/Pagination';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';
import { getImage, getSrc } from 'gatsby-plugin-image';

const BlogIndex = function ({ pageContext, data, location }) {
  const { from, to, currentPage, numPages } = pageContext;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  const { lang, homeLink } = useLang();

  const img = getImage(data.myImage);
  const imgAlt = img.alt ? img.alt : formatMessage('tIndTitle');
  const description = data.site.siteMetadata.description
    ? data.site.siteMetadata.description
    : formatMessage('tDescription');

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={formatMessage('tIndTitle')}
        keywords={formatMessage('taIndKeywords')}
        description={description}
        image={img}
        imageAlt={imgAlt}
      />
      <aside>
        <Bio />
      </aside>
      {/**
      <h3>
        {formatMessage('tfIndCountPosts', { count: data.allMarkdownRemark.totalCount, from, to })}
      </h3>
    */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <PostAbbrev
            lang={lang}
            base={homeLink}
            key={node.fields.slug}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
            title={title}
            excerpt={node.frontmatter.description || node.excerpt}
            tags={node.frontmatter.tags}
          />
        );
      })}
      <Pagination currentPage={currentPage} totalPageNumber={numPages} />
    </Layout>
  );
};

BlogIndex.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

BlogIndex.defaultProps = {};

export default BlogIndex;

export const pageQuery = graphql`
  query ($langKey: String!, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        lang
        siteUrl
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          timeToRead
          fields {
            slug
            langKey
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            description
            tags
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
