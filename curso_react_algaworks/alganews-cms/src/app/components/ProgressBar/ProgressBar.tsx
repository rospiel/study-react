import React from "react";
import styled from "styled-components";
import { transparentize } from 'polished';

export interface ProgressBarProps {
  title: string
  progress: number
  theme: 'primary' | 'secondary' 
  width?: number
}

export default function ProgressBar (props: ProgressBarProps) {
  return (
    <Container width={props.width} theme={props.theme} progress={props.progress}>
      <div className="background">{props.title}</div>
      <div className="foreground">{props.title}</div>
    </Container>
  )
}

const Container = styled.div<{
  width?: number
  theme: string
  progress: number
}>`
  width: ${(props) => (props.width ? props.width : 296)}px;
  position: relative;

  div.background {
    position: absolute;
    width: ${(props) => (props.width ? props.width : 296)}px;
    height: 24px;
    background-color: ${transparentize(0.85, '#244060')};
  }

  div.foreground {
    position: absolute;
    
    width: ${(props) => (props.progress || props.progress === 0 ? props.progress : 100)}%;
    height: 24px;
    background-color: ${props => props.theme === 'primary' ? '#244060' : '#0099ff'};
    color: white;
    /* changing color when progress reach text */
    overflow: hidden;
    white-space: nowrap;
  }
`
