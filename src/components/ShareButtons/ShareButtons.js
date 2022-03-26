import React from 'react';
import PropTypes from 'prop-types';
import { Facebook, Twitter, Linkedin, Pocket } from 'react-feather';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import './ShareButtons.css';

const ShareButtons = function ({ url, title, description }) {
  return (
    <div className="post-meta-share-icons">
      شاركها على مواقع التواصل:
      <FacebookShareButton url={url} quote={description}>
        <Facebook strokeWidth={1.25} style={{ color: '#4267B2' }} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={description}>
        <Twitter strokeWidth={1.25} style={{ color: '#1DA1F2' }} />
      </TwitterShareButton>
    </div>
  );
};

ShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ShareButtons;
