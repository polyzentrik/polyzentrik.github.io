/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: "Polyzentrik",
    description: "Digital sustainability solutions",
    siteUrl: "https://www.polyzentrik.com",
    image: "/logo-banner.png"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener noreferrer nofollow`
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
              quality: 90,
              withWebp: true,
              backgroundColor: `none`,
              linkImagesToOriginal: false,
              showCaptions: [`title`, `alt`],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: { "icon": "src/images/graphics/icon.png" }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { "name": "images", "path": "./src/images/" }, __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { "name": "pages", "path": "./src/pages/" }, __key: "pages"
    },    
    {
      resolve: "gatsby-source-filesystem",
      options: { name: `services`, path: `${__dirname}/services`, }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: `blog`, path: `${__dirname}/blog`, }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-remove-root-p-tag`, options: {},
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`, options: {
        fonts: [`Unbounded\:300,600,900`], display: 'swap'
      }
    },
  ]
};