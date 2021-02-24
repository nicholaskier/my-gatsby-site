/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "My Portfolio",
    author: "Nicholas Kier",
    description: "The best portfolio you've ever seen.",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gnotes',
        path: `${__dirname}/src/data/posts`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
