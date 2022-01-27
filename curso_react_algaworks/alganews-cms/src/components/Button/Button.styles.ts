import styled from "styled-components";
import { transparentize } from 'polished';

const COLORS = {
  red: '#F84735',
  primary: '#0099FF',
  foreground: '#274060'
}

const THEME = {
  danger: {
    bg: '#F84735',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
    `,
    disabled: {
      color: COLORS.red,
      bg: transparentize(0.75, COLORS.red)
    }
  },
  primary: {
    bg: '#0099FF',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
    `,
    disabled: {
      color: '#fff',
      bg: transparentize(0.44, COLORS.primary)
    }
  }, 
  text: {
    bg: 'transparent',
    color: '#274060',
    onHover: `
      border-color: #274060
    `,
    disabled: {
      color: COLORS.foreground,
      bg: transparentize(0.44, '#508AC9')
    }
  }
}

export const Wrapper = styled.button<{
  variant: 'danger' | 'text' | 'primary'
}>`
  padding: 6px 8px 4px;
  border: 1px solid ${props => THEME[props.variant].bg};

  color: ${props => THEME[props.variant].color};
  background-color: ${props => THEME[props.variant].bg};

  &:hover,
  &:focus {
    ${props => THEME[props.variant].onHover};
  }

  &:disabled {
    background-color: ${props => THEME[props.variant].disabled.bg};
    color: ${props => THEME[props.variant].disabled.color};
    pointer-events: none;
    border-color: transparent;
  }
`