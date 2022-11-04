import { transparentize } from "polished"
import styled from "styled-components"
import { HEADER_HEIGHT } from "../_constants"

export default function Header(props: any) {
  return (
    <Container>
      <div className="containerHeader">
        <span>LOGO</span>
        <span>NAVBAR</span>
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

  .containerHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 848px;
    height: ${HEADER_HEIGHT}px;
    margin: auto;
  }
`

