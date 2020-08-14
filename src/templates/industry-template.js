import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/header/Hero"
import Banner from "../components/header/Banner"
import Snapshot from "../components/report/Snapshot"

const IndustryTemplate = ({ data }) => {
  const { businesses, category } = data.industryItem
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Banner>
          <Snapshot hawaii="190 +34%" nation="190 +34%" world="190 +34%" />
        </Banner>
      </Hero>

      <StyledContainer>
        <div className="header">
          <h1>{category} Businesses</h1>
        </div>
        {businesses.map(item => (
          <div className="box">
            <ul key={item.slug}>
              <li>{item.name}</li>
              <li>{item.center}</li>
              <li>{item.street}</li>
              <li>{item.city}</li>
              <li>{item.phone}</li>
              <li>{item.email}</li>
            </ul>
          </div>
        ))}
      </StyledContainer>
    </Layout>
  )
}

const StyledContainer = styled.div`
  width: 85vw;
  margin: 4rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .header {
    flex-basis: 100%;
  }
  .box {
    flex-basis: 20%;
    border: 1px solid gray;
    padding: 1rem;
    margin-bottom: 1rem;
    ul {
      list-style-type: none;
      li:nth-child(1) {
        font-weight: bold;
      }
    }
  }
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 40%;
    }
  }
`

export const query = graphql`
  query($slug: String!) {
    industryItem: industryDataJson(slug: { eq: $slug }) {
      id
      category
      slug
      businesses {
        name
        center
        street
        city
        phone
        email
        bslug
      }
    }
  }
`

export default IndustryTemplate
