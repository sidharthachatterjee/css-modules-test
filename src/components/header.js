import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.module.css'

const Header = ({ siteTitle }) => (
  <header styleName="header">
    <div>
      <h1>{siteTitle}</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
