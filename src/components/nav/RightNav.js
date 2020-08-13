import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class RightNav extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "/industry",
        text: "industry",
      },
      {
        id: 2,
        path: "/contact",
        text: "contact",
      },
      {
        id: 3,
        path: "/assistance",
        text: "assistance",
      },
      {
        id: 4,
        path: "/login",
        text: "login",
      },
    ],
  }
  render() {
    return (
      <Ul open={this.props.open}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </Ul>
    )
  }
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  li {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    padding-right: 2.5rem;
    &:nth-child(6) {
      padding-right: 0rem;
    }
    a {
      padding-bottom: 0.4rem;
      text-decoration: none;
      color: var(--mainColor);
      transition: 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        color: var(--lightGray);
      }
    }
  }
  .cart-amount {
    font-size: 13px;
    position: relative;
    top: -9px;
    left: 2px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--mainColor);
    position: fixed;
    text-align: right;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 90%;
    z-index: 9998;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    margin-top: 0;
    li {
      width: 90%;
      font-size: 2.5rem;
      padding-top: 1rem;
      padding-right: 1rem;
      a {
        color: #fff;
      }
    }
    .cart {
      margin-right: 2rem;
    }
  }
`

export default RightNav
