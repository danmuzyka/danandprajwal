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
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
