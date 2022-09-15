import { mdiHelpCircle } from '@mdi/js';
import Icon from '@mdi/react';
import * as P from './Profile.styles';

export interface ProfileProps {
  name: string
  description: string
  editorId: number
  avatarUrl?: string;
}

export default function Profile (props: ProfileProps) {
  return (
    <P.Wrapper to={`/editores/${props.editorId}`}>
      <img className="picture" src={props.avatarUrl}alt="Foto perfil" />
      
      <div>
        <p className="name">{props.name}</p>
        <p className="description">{props.description}</p>
      </div>
    </P.Wrapper>
  )
}