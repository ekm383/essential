import React from "react"
import styled from "styled-components"

const Search = () => {
  return (
    <StyledSearch>
      <h2>Search Business</h2>
      <input type="search" name="search" id="search" value="" />
    </StyledSearch>
  )
}

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0rem;
  h2 {
    font-size: 3rem;
    margin-top: 3rem;
  }
  input#search {
    margin: 0rem auto;
    padding: 1rem 2rem;
    font-size: 1rem;
    width: 60%;
    border: none;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    padding: 2rem 0rem;
    h2 {
      margin: 2rem auto 0rem auto;
    }
    input#search {
      width: 100%;
    }
  }
`

export default Search
