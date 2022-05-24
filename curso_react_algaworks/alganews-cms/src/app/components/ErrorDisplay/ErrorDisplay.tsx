import { mdiAlert } from '@mdi/js';
import Icon from '@mdi/react';
import * as ED from './ErrorDisplay.styles';

export interface ErrorDisplayProps {
  small: boolean
  title?: string
  message?: string
}

export default function ErrorDisplay (props: ErrorDisplayProps) {
  const DEFAULT_TITLE = "Erro ao recuperar componente";
  const DEFAULT_MESSAGE = "Código de erro que seja identificável pelo time de desenvolvimento";

  function buildTitle():string {
    return props.title ? props.title : DEFAULT_TITLE;
  }

  function buildMessage():string {
    return props.message ? props.message : DEFAULT_MESSAGE;
  }

  function configureSize():string {
    return (props.small ? "24" : "48") + "px";
  }

  return (
    <ED.Wrapper>
      <Icon color="#274060" size={configureSize()} path={mdiAlert} />
      <span className="title">{buildTitle()}</span>
      <span className="message">{buildMessage()}</span>
    </ED.Wrapper>
  )
}