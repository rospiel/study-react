import { ReactNode } from "react";
import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants";

interface ContentProps {
  children: ReactNode
}

export default function Content(props: ContentProps) {
  return (
    <MainContainer>
      <div className="contentContainer">
        {props.children}
      </div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);

  .contentContainer {
    max-width: 848px;
    margin: auto;
    padding: 16px;
  }
`