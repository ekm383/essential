import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import IndustryItem from "./IndustryItem"

const IndustryList = () => {
  const data = useStaticQuery(graphql`
    query {
      industry: allIndustryDataJson {
        edges {
          node {
            slug
            id
            category
          }
        }
      }
    }
  `)
  const industries = data.industry.edges
  return (
    <StyledList>
      {industries.map(({ node }) => (
        <div key={node.id} className="list">
          <AniLink className="link" fade to={`/industry/${node.slug}`}>
            <IndustryItem industry={node.category} />
          </AniLink>
        </div>
      ))}
    </StyledList>
  )
}

const StyledList = styled.div`
  width: 90vw;
  margin: 4rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .list {
    width: 23%;
    height: 250px;
    margin: 1rem 0rem;
    background: gray;
    position: relative;
    border-radius: 10px;
    p {
      position: absolute;
      bottom: 10px;
      left: 10px;
    }
    @media (max-width: 768px) {
      width: 47%;
    }
  }
`

export default IndustryList
