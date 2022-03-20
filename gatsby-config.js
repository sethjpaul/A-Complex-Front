module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [

  {
    resolve: `gatsby-source-ghost`,
    options: {
    apiUrl: `https://d2bmp7jhi43vv5.cloudfront.net`,
    contentApiKey: `6a79365c7aea74219b75e66b52`,
    }
  },    
    
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "evRAGPxjb1VGqNRKLyB9fV",
        token: "L4A5yGxbzFacdS7d0smkkg0QvEIGC2vD9FNxqX0QloYKgvX9BS62BJW6P0cJzQQKE3B5ndPapDL3YIAipKLg",
      },
    ], // An array of project ids.
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.tsx"),
  },
},
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/record-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
