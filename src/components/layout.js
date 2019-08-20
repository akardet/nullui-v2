import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
