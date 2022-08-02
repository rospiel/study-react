import { mdiHelpCircle } from '@mdi/js';
import Icon from '@mdi/react';
import * as P from './Profile.styles';

export interface ProfileProps {
  name: string
  description: string
  editorId: number
}

export default function Profile (props: ProfileProps) {
  return (
    <P.Wrapper to={`/editores/${props.editorId}`}>
      <div className="picture">
        <Icon color="#274060" size="45px" path={mdiHelpCircle} />
      </div>
      <div>
        <p className="name">{props.name}</p>
        <p className="description">{props.description}</p>
      </div>
    </P.Wrapper>
  )
}