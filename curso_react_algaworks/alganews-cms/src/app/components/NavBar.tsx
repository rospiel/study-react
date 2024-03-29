import { NavLink } from "react-router-dom"
import styled from "styled-components"

export default function NavBar () {
  return (
    <>
      <List>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/editores">Editores</NavLink></li>
        <li><NavLink exact to="/posts/criar">Novo Post</NavLink></li>
      </List>
    </>
  )
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;

  li {
    text-transform: lowercase;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: #274060;

    &.active {
      color: #09f;
    }
  }
`