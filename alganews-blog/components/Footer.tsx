import { transparentize } from "polished"
import styled from "styled-components"
import { FOOTER_HEIGHT } from "../_constants"
import Logo from "./Logo"

export default function Footer(props: any) {
  return (
    <Container>
      <div className="containerHeader">
        <Logo />
        <p className="credits" >todos os direitos reservados</p>
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
    height: 100%;
    margin: auto;
  }

  .credits {
    font-size: 18px;
    color: ${p => transparentize(0.6, p.theme.activeElementForeground)};
  }
`

