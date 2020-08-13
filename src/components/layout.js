import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "./nav/NavBar"
import Footer from "./footer/Footer"
import Copyright from "./footer/Copyright"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
      <Copyright />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
