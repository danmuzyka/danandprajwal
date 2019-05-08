require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const url = require('url');

const targetAddress = url.parse(process.env.TARGET_ADDRESS || `https://www.danandprajwal.com`);

module.exports = {
  siteMetadata: {
    title: `Dan and Prajwal`,
    description: `Our relationship, our love, and our lifetime of adventure together`,
    author: `@danmuzyka`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    'resolve-url-loader',
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'danandprajwal',
        region: 'us-west-2',
        acl: null,
        protocol: targetAddress.protocol.slice(0, -1),
        hostname: targetAddress.hostname,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: targetAddress.href.slice(0, -1),
      },
    },
  ],
};
