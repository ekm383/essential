import React from "react"
import styled from "styled-components"

const IndustryItem = ({ industry }) => {
  return (
    <StyledItem>
      <p>{industry}</p>
    </StyledItem>
  )
}

const StyledItem = styled.div`
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
`

export default IndustryItem
