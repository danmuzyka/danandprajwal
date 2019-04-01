import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import './header.scss';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
    className="page-header"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `4rem 1.0875rem`,
      }}
      className="page-header__bg-image"
    >
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
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
