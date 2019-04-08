/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path  = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log('node.fields.slug', node.fields.slug);
      const urlPath = (node.fields.slug === '/home/') ? '/' : node.fields.slug;
      console.log('path', urlPath);
      createPage({
        path: urlPath,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          // Data passed in context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  });
};
