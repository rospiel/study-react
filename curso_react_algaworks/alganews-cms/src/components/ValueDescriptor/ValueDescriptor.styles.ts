import styled from "styled-components";

export const Wrapper = styled.div<{
  isDefault: boolean
}>`
  display: flex;
  flex-direction: column;
  
  span.Description {
    font-size: 12px;
    color: #274060;
    line-height: 14px;
    margin: 1px 0px;
  }

  span.Currency, span.Value {
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => (props.isDefault ? "#0099FF" : "#274060")};
    margin: 1px 0px;
  }

  span.Value {
    font-weight: 900;
  }
`