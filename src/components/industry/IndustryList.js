import React, { Component } from "react"
import styled from "styled-components"

import IndustryItem from "./IndustryItem"

class IndustryList extends Component {
  state = {
    industry: [
      {
        id: "1",
        type: "Health Care",
      },
      {
        id: "2",
        type: "Markets",
      },
      {
        id: "3",
        type: "Farming & Fishing",
      },
      {
        id: "4",
        type: "Social Services",
      },
      {
        id: "5",
        type: "Banks",
      },
      {
        id: "6",
        type: "Hardware Stores",
      },
      {
        id: "7",
        type: "Repair & Maintenance",
      },
      {
        id: "8",
        type: "Logistics",
      },
    ],
  }
  render() {
    return (
      <StyledList>
        {this.state.industry.map(({ id, type }) => (
          <div key={id} className="list">
            <IndustryItem industry={type} />
          </div>
        ))}
      </StyledList>
    )
  }
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
