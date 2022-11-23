import { transparentize } from "polished"
import styled from "styled-components"
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from "../_constants"
import Logo from "./Logo"
import NavBar from "./NavBar"

export default function Header(props: any) {
  return (
    <Container>
      <div className="containerHeader">
        <Logo />
        <NavBar />
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};;
  box-shadow: 0 3px 10px ${(p) => transparentize(0.9, p.theme.pageForeground)};

  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (max-width: 767px) {
    height: ${MOBILE_HEADER_HEIGHT};
  }

  .containerHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 848px;
    height: ${HEADER_HEIGHT}px;
    margin: auto;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`

