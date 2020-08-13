import React from "react"
import styled from "styled-components"

const snapshot = ({ hawaii, nation, world }) => {
  return (
    <StyledSnapshot>
      <h6>Covid Cases Snapshot</h6>
      <ul>
        <li>Hawaii {hawaii}</li>
        <li>Nation {nation}</li>
        <li>World {world}</li>
      </ul>
    </StyledSnapshot>
  )
}

const StyledSnapshot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h6 {
    font-size: 1.5rem;
  }
  ul {
    margin-top: 0.7rem;
    list-style-type: none;
    li {
      display: inline;
      margin-right: 1rem;
    }
  }
  @media (max-width: 768px) {
    h6 {
      font-size: 1.2rem;
    }
    ul {
      text-align: left;
      li {
        display: block;
      }
    }
  }
`

export default snapshot
