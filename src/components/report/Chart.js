import React from "react"
import styled from "styled-components"

const Chart = () => {
  return (
    <StyledChart>
      <div>
        <h4>Covid-19 Report</h4>
      </div>
      <div className="chart"></div>
      <div>
        <h4>Current Closures:</h4>
        <ul>
          <li>City Parks</li>
          <li>Beaches</li>
          <li>Bars</li>
          <li>Hikes</li>
        </ul>
      </div>
    </StyledChart>
  )
}

const StyledChart = styled.div`
  width: 90vw;
  margin: 4rem auto 6rem auto;
  h4 {
    font-size: 2rem;
    margin: 1rem 0rem;
  }
  .chart {
    height: 500px;
    background: gray;
  }
  ul {
    list-style-type: none;
    margin-top: 2rem;
    li {
      display: inline;
      padding: 1rem 3rem;
      margin-right: 2rem;
      background: var(--mainColor);
      color: white;
      border-radius: 5px;
    }
  }
`

export default Chart
