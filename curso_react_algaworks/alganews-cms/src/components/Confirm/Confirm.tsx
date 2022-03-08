import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

export interface ConfirmProps {
  question: string
}

export default function Confirm (props: ConfirmProps) {
  return (
    <Container>
      <span className="question">{props.question}</span>
      <Actions>
        <Button label="Não" variant="danger"/>
        <Button label="Sim" variant="primary"/>
      </Actions>
    </Container>
  )
}

const Container = styled.div`
  width: 229px;
  height: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F3F8FA;
  gap: 12px;

  span.question {
    font-weight: bold;
    font-size: 18px;
    font-weight: 21.6px;
    color: #274060;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;
  }
`
const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

