import React from "react";
import styled from "styled-components";

export interface FieldDescriptorProps {
  label: string
  value: string 
}

export default function FieldDescriptor ({ label, value }:FieldDescriptorProps) {
  return (
    <StyledFieldDescriptor>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </StyledFieldDescriptor>
  )
}

const StyledFieldDescriptor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4;
  color: #274060;

  span.label {
    text-transform: lowercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  span.value {
    font-size: 14px;
  }
`