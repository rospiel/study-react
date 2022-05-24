import styled from "styled-components";

export const Wrapper = styled.a`
  display: flex;
  text-decoration: none;
  border: 1px solid rgba(39, 64, 96, 0.1);
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  color: #274060;

  div.picture {
    width: 48px;
    height: 48px;
    margin: 16px 24px 16px 16px;
  }

  div p.name {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }

  div p.description {
    padding-top: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }

  &:focus,
  &:hover {
    outline: #0099FF solid 5px;
  }
`