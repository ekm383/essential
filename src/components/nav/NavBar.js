import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Burger from "./Burger"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: allDataJson {
        edges {
          node {
            logo {
              childImageSharp {
                fluid(maxWidth: 500, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const logo = data.logo.edges
  return (
    <Nav>
      {logo.map(({ node }) => (
        <div className="box" key={node.logo}>
          <Img
            className="logo"
            fluid={node.logo.childImageSharp.fluid}
            alt="logo"
          />
        </div>
      ))}
      <Burger />
    </Nav>
  )
}

const Nav = styled.nav`
  width: 95vw;
  margin: 1rem auto 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .box {
    width: 50px;
  }
  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`

export default NavBar
