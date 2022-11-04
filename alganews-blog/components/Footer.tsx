import styled from "styled-components"
import { FOOTER_HEIGHT } from "../_constants"

export default function Footer(props: any) {
  return (
    <Container>
      <div className="containerHeader">
        <span>LOGO</span>
        <span>CRÉDITOS</span>
      </div>
    </Container>
  )
}

const Container = styled.footer`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};
  
  width: 100%;
  height: ${FOOTER_HEIGHT}px;

  .containerHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    max-width: 848px;
    height: 56px;
    margin: auto;
  }
`

