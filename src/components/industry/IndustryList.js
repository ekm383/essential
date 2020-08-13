import React from "react"
import styled from "styled-components"

import IndustryItem from "./IndustryItem"

const IndustryList = () => {
  return (
    <StyledList>
      <IndustryItem industry="One" />
      <IndustryItem industry="One" />
      <IndustryItem industry="One" />
      <IndustryItem industry="One" />
      <IndustryItem industry="One" />
      <IndustryItem industry="One" />
      <IndustryItem industry="One" />
      <IndustryItem industry="One" />
    </StyledList>
  )
}

const StyledList = styled.div`
  width: 90vw;
  margin: 4rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default IndustryList
