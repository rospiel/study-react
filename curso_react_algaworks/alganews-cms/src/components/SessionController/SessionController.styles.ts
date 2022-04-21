import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: solid 1px rgba(39, 64, 96, 0.1);
  box-sizing: border-box;

  div.picture {
    margin-top: 20px;
    width: 47px;
    height: 47px;
    font-weight: 500;
    text-align: center;
    font-style: normal;
    color: #274060;
  }

  h2.name {
    /* begin add ... if exceed size */
    width: 175px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    /* end add ... if exceed size */

    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }

  span.description {
    font-size: 12px;
    line-height: 14px;
  }

  div.button {
    margin-bottom: 20px;
  }
` 