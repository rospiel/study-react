import styled from "styled-components";
import { Wrapper as Button } from "../Button/Button.styles";

export const Wrapper = styled.div`
  width: 608px;
`

export const Input = styled.input`
  display: none
`

export const Label = styled.label`
  background-color: #09f;
  color: #fff;
  padding: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ImagePreview = styled.div<{
  preview: string
}>`
  height: 100%;
  background-image: url(${props => props.preview});
  background-position: center;
  background-size: cover;

  display: flex; 
  justify-content: center;
  align-items: center;
`

export const ImagePreviewWrapper = styled.div`
  background-color: #274060;
  height: 240px;
  width: 608px;

  ${Button} {
    display: none;
  }

  &:hover {
    ${ImagePreview} {
      content: '';
      width: 608px;
      height: 240px;
      background-color: rgba(39, 64, 96, 0.7);
    }
    ${Button} {
      display: block;
      background-color: #fff;
      font-size: 18px;
    }
  }

  div.labelButton {
    display: flex;
    justify-content: center;
  }
`

