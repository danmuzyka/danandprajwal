require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const googleCredentials = require(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS);

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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: `1DQgRxQA4A3AY6j0F2HUrar8XWBNqvqUTFi064qRJ4w0`,

        // The `spreadsheetName` is recommended, but optional
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // If you are sourcing multiple sheets, you can set this to distinguish between the source data
        spreadsheetName: `DanAndPrajwalWebsiteContent`,

        // The `typePrefix` is optional, default value is "GoogleSpreadsheet"
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // It can be overridden to fully customize the root query
        typePrefix: `GoogleSpreadsheet`,

        // The `credentials` are only needed when you need to be authenticated to read the document.
        // It's an object with the following shape:
        // {
        //   client_email: "<your service account email address>",
        //   private_key: "<the private key for your service account>"
        // }
        //
        // Refer to googles own documentation to retrieve the credentials for your service account:
        //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
        //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
        //
        // When you have generated your credentials, it's easiest to refer to them from an environment variable
        // and parse it directly:
        credentials: googleCredentials,

        // The `mapValue(value, key, cell)` function lets you map each cell's value to your need.
        // For example, it can be used to ensure that all strings are trimmed:
        mapValue: value => typeof value === "string" ? value.trim() : value
      }
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
  ],
};
