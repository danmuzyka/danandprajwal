import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header"
import "./layout.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="page-wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="page-main">
          <main>{children}</main>
        </div>
        <footer className="footer">
          <div className="footer__content">
            © {new Date().getFullYear()}, Dan Karur-O'Brien Muzyka and Prajwal Karur-O'Brien Mohan
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
