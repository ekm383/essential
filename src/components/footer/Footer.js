import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footer: dataJson {
        instagram
      }
    }
  `)
  const { instagram } = data.footer
  return (
    <FooterWrapper id="information">
      <div className="box contact">
        <div>
          <a href={instagram}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background: var(--darkGray);
  color: var(--white);
  .box {
    margin: 0rem auto;
    padding: 2rem;
    text-align: center;
    h4 {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
  a {
    color: var(--white);
    font-size: 2rem;
    line-height: 6rem;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer
