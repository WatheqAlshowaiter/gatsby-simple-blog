<h1 align="center">gatsby-simple-blog</h1>

[![Build Status](https://travis-ci.org/thundermiracle/gatsby-simple-blog.svg)](https://travis-ci.org/thundermiracle/gatsby-simple-blog)
[![CircleCI](https://circleci.com/gh/thundermiracle/gatsby-simple-blog.svg?style=svg)](https://circleci.com/gh/thundermiracle/gatsby-simple-blog)
[![Netlify Status](https://api.netlify.com/api/v1/badges/bdb0f821-73be-43ea-8ad5-bf002188415f/deploy-status)](https://app.netlify.com/sites/kind-thompson-8554b1/deploys)

## Description

A gatsbyjs starter forked from gatsby-starter-blog and applied overreacted lookings, with tags and Algolia, pagination, breadcrumbs, eslint, relative posts, disqus, i18n, eslint supported.

__This project is migrated to Gatsby@v4__
- check the latest Gatsby@v3 version [here](https://github.com/thundermiracle/gatsby-simple-blog/tree/gatsby-3).
- check the latest Gatsby@v2 version [here](https://github.com/thundermiracle/gatsby-simple-blog/tree/gatsby-2.0).

## Sample pages

[Github-Pages](https://thundermiracle.github.io/gatsby-simple-blog/)

[Netlify](https://gatsby-simple-blog.thundermiracle.com/)

[Gatsby Cloud](https://gatsbysimpleblog1.gtsb.io/)

## How to use

```sh
npm install -g gatsby-cli

gatsby new my-blog-folder https://github.com/thundermiracle/gatsby-simple-blog
```

## How to deploy by Circle-CI in Medium.com

[Medium.com -- Deploy Static Sites to Netlify by Circle-CI](https://medium.com/@thundermiracle/deploy-static-sites-to-netlify-by-circle-ci-ab51a0b59b73?source=friends_link&sk=095db82e2f8e8ef91d03a171f217e340)

## How to add search function to a multilingual GatsbyJS site with Algolia

[https://thundermiracle.medium.com/how-to-add-search-function-to-a-multilingual-gatsbyjs-site-with-algolia-4ef17af888f3](https://thundermiracle.medium.com/how-to-add-search-function-to-a-multilingual-gatsbyjs-site-with-algolia-4ef17af888f3)
## Configuration

1. Almost all basic configurable values are here: __./config/index.js__

1. To enable Algolia, create a site in Algolia and copy `.env.sample` to `.env`, change all variables to real Algolia ones. You can check the tutorial here:

[https://www.gatsbyjs.com/docs/adding-search-with-algolia/#configuring-the-algolia-plugin](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#configuring-the-algolia-plugin)

## i18n

1. Add [lang].js to config/locales folder

1. Modify supportedLanguages in config/index.js

1. Set site.lang in config/index.js as default language

1. add [filename].[lang].md to content/blog and enjoy!

## Features

* ## __i18n__

  Display multiple language. (Only be shown when supportedLanguages > 1)

  ![i18n](./screenshots/i18n.png)

  Display language link in every post. (You can disable it in config/index.js by displayTranslations: false)

  ![translations](./screenshots/translations.png)

* ## __overreacted design__

  [overreacted.io](https://overreacted.io/) lookings

  ![top--light](./screenshots/top.png)

  ![top--dark](./screenshots/top-dark.png)

* ## __Tags__

  Display articles in same tag.

  ![tag](./screenshots/tag.png)

  ![alltags](./screenshots/alltags.png)

* ## __Algolia__

  Search posts in same language by Algolia.

  ![Algolia-search](./screenshots/Algolia.png)

* ## __Breadcrumbs__

  Display breadcrumbs in header part.

  ![post](./screenshots/post.png)

* ## __Relative posts__

  Display previous and next posts in same tag in footer part.

  ![relative-posts](./screenshots/relative-posts.png)

* ## __Disqus__

  Use disqus.com to enable comment.

  ![disqus](./screenshots/disqus.png)

* ## __eslint__

  Enable eslint for better coding experience.

* ## __module resolver__

  Enable babel-module-resolver to prevent relative path hell

## License

This project is licensed under the terms of the [MIT license](/LICENSE).


## TODO
- [ x ] enable Arabic excerpts
- [ x ] fix date formatting to YYYY-MM-DD
- [ x ] Change the color (and maybe styling) of the tags
- [ x ] Change the color of the pagination
- [ x ] Change font to better font (Dubai font for example)
- [ x ] remain the header title the same color and size in pagination
- [ x ] Change the footer text to (copyright or made by me)
- [ x ] fix the breadcrumb in the header in Arabic language and translate the text
- [ x ] remain the header title the same color in the blog page
- [ x ] remove time to read in the blog post page
- [ x ] fix the direction of the similar posts in the footer
- [ x ] fix the indentation of the tags: `ul, ol, blockquote` blog post page
- [ x ] fix the position of `relative posts`
- [ x ] enable arabic language as a default
- [ x ] Change theme color
- [ x ] Add sharable icons via twitter & facebook
- [ x ] Change the copy code text to arabic text & color to twitter blue
- [ x ] Change the Icon in the browser tab
- [ x ] look at the image quality option in gatsby-image if it helps
- [ x ] enable posts images to be shown in twitter (for these pages: blog-index, tags, tag)
- [ x ] enable posts images to be shown in facebook (for these pages: blog-index, tags, tag)
- [ x ] add upper line above the bio in tag page and tags page
- [ x ] make the bio in the footer in tags page like other pages, except blog-index
- [ ] combine this project with netlify-cms
- [ ] enable dynamic (thumbnail or cover)  to be shown in twitter and facebook links in the blog-post pages
- [ ] if there is no thumbnail choose any image in the post or the default static image
- [ ] change the siteUrl to the real domain
- [ ] remove all warnings from the code
- [ ] fix all the title in <title> in every page post-index, post, tags, and tag
- [ ] change the card-blog4.png to a better image name and remove other images
- [ ] change profile-pic for a higher quality image
- [ ] configure the post-per-page as the customer wants

