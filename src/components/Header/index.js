import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import './header.scss';

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allMdx(sort: { order: ASC, fields: [frontmatter___menuOrder] }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          marginBottom: `1.45rem`,
        }}
        className="page-header"
      >
        <Navbar bg="secondary" expand="sm" fixed="top" variant="dark">
          <Navbar.Toggle aria-controls="navbarMenuToggle" />
          <Navbar.Collapse id="navbarMenuToggle">
            <Nav className="navbar-nav nav nav-fill">
              {data.allMdx.edges.map((value, index) => {
                if (value.node.fields.slug === '/home/') {
                  value.node.fields.slug = '/';
                  value.node.frontmatter.title = 'Home';
                }
                return (
                  <Nav.Link key={index} href={value.node.fields.slug}>{value.node.frontmatter.title}</Nav.Link>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="page-header__bg-image">
          <h1
            style={{ margin: 0 }}
            className="page-header__heading"
          >
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </header>
    )}
  />
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
