import styled from "styled-components";

export interface NoDataProps {
  height?: number
}

export default function NoData (props: NoDataProps) {
  return (
    <NoDataWrapper height={props.height ? props.height : 120}>
      <span className="message">Sem dados para exibir</span>
      <span className="sadFace">:(</span>

    </NoDataWrapper>
  )
}

const NoDataWrapper = styled.div<NoDataProps>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height}px;

  span.message {
    font-size: 24px;
    font-weight: 700;
    color: #274060;
  }

  span.sadFace {
    font-family: 'Roboto Mono', monospace;
    color: #0099ff;
    font-weight: 700;
  }
`

