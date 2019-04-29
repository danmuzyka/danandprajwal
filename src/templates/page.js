import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import MDXRenderer from "gatsby-mdx/mdx-renderer"


const pageTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} keywords={[`wedding`, `gay`, `husbands`]} />
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;

export default pageTemplate
