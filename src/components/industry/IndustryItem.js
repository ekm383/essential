import React from "react"
import styled from "styled-components"

const IndustryItem = () => {
  return (
    <StyledItem>
      <p>Item</p>
    </StyledItem>
  )
}

const StyledItem = styled.div`
  width: 23%;
  height: 250px;
  margin: 1rem 0rem;
  background: gray;
  @media (max-width: 768px) {
    width: 47%;
  }
`

export default IndustryItem
