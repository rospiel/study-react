import { mdiHelpCircle } from "@mdi/js";
import Icon from "@mdi/react";
import { MouseEventHandler } from "react";
import Button from "../Button/Button";
import * as SC from "./SessionController.styles";

export interface SessionControllerProps {
  onLogout?: MouseEventHandler<HTMLButtonElement>
  name: string
  description: string
}

export default function SessionController (props: SessionControllerProps) {
  return (
    <SC.Wrapper>
      <div className="picture">
        <Icon color="#274060" size="45px" path={mdiHelpCircle} />
      </div>
      <h2 className="name">{props.name}</h2>
      <span className="description">{props.description}</span>
      <div className="button"> 
        <Button variant="danger" label="Logout" onClick={props.onLogout} />
      </div>

    </SC.Wrapper>
  )
}