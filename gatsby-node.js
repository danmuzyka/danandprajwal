/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path  = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `mdx` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/page.js`);

  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.error(result.errors);
      reject(result.errors);
    }

    // Call `createPage` for each result.
    result.data.allMdx.edges.forEach(({ node }) => {
      const urlPath = (node.fields.slug === '/home/') ? '/' : node.fields.slug;
      createPage({
        path: urlPath,
        component: pageTemplate,
        context: {
          // Data passed in context is available
          // in page queries as GraphQL variables.
          id: node.id
        },
      })
    })
  });
};
