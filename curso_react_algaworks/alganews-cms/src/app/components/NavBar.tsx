import styled from "styled-components"

export default function NavBar () {
  return (
    <>
      <List>
        <li>Home</li>
        <li>Contato</li>
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
  }
`