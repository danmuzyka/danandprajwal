import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => {
  console.log('data', data);
  const content = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{content.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
