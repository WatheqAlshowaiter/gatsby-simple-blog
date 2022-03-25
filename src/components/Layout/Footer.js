import React from 'react';

import { rhythm } from 'utils/typography';

const Footer = function() {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
        textAlign: 'center',
      }}
    >
      <p>
        تطوير {' '}
        <a
          href="https://watheq.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          واثق الشويطر
        </a>
      </p>
    </footer>
  );
}

export default Footer;
