const dotenv = require("dotenv")
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}
module.exports = {
  siteMetadata: {
    title: `Buzzedison: Spark your Career or Calling`,
    description: `Power your business, career and calling`,
    author: `@buzzedison`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `037lifnbabu6`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `555f66614e25ed3eb942fd3e4531f02386c44f5a1a726d8f4ee15170ba4122b8`,
      },
    },
  ],
}
