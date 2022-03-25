import React from 'react';
import PropTypes from 'prop-types';

import { useLang } from 'context/LanguageContext';
import { rhythm } from 'utils/typography';

import LanguageBar from './LanguageBar';
import Header from './Header';
import Footer from './Footer';
import ReadModeToggle from './ReadModeToggle';
import TwitterIcon from '../TwitterIcon';
import Breadcrumbs from '../Breadcrumbs';

const Layout = function ({ children, location, title, breadcrumbs }) {
  const { lang, homeLink, refresh } = useLang();

  React.useEffect(() => {
    refresh(location);
  }, [location, refresh]);

  return (
    <div
      style={{
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        minHeight: '100vh',
        fontFamily: 'var(--systemFont)',
      }}
    >
      <LanguageBar lang={lang} />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `2.625rem ${rhythm(3 / 4)}`,
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.625rem',
          }}
        >
          <Header base={homeLink} location={location} title={title} />
          {/** <ReadModeToggle /> */}
          {/**
        <div className="gt-social">
            <a
              className="gt-social-twitter"
              href="https://twitter.com/homoud_albahli"
              title="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
              </svg>
            </a>
          </div> */}
          <TwitterIcon />
        </header>
        <Breadcrumbs
          base={homeLink}
          langKey={lang}
          data={breadcrumbs}
          showTop={true}
          style={{ marginTop: '-1.5rem' }}
        />
        {children}
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
  breadcrumbs: PropTypes.array,
};

Layout.defaultProps = {
  children: null,
  title: null,
  breadcrumbs: null,
};

export default Layout;
