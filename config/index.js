const site = {
  pathPrefix: '/gatsby-simple-blog',
  title: 'مدونة حمود الباهلي',
  author: 'حمود الباهلي',
  description: 'حمود الباهلي - معد بودكاست لمحات. مهتم بالتاريخ والكتابة والسرد القصصي.',
  siteUrl: 'https://test-blog-123.netlify.app/' /** TODO: it will be changed to the real domain */,
  twitter: 'homoud_albahli',
  github: '',
  medium: '',
  facebook: '',
  disqusShortName: '',
  googleTrackingId: 'G-E7NM1ZBB2T',
  lang: 'ar',
  displayTranslations: true,
  postsPerPage: 3,
};

const supportedLanguages = {
  ar: 'العربية',
};

module.exports = {
  site,
  supportedLanguages,
};
