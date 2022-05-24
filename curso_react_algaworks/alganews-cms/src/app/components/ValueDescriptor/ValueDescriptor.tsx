import * as VD from './ValueDescriptor.styles';

export interface ValueDescriptorProps {
  description: string
  value: number
  isDefault: boolean
  isCurrency?: boolean
}

export default function ValueDescriptor (props: ValueDescriptorProps) {
  return (
  <VD.Wrapper isDefault={props.isDefault}>
    <span className="Description">{props.description}:</span>
    <div>
      { props.isCurrency && 
      <span className="Currency">{'R$'}</span> }
      <span className="Value">
        {props.value.toLocaleString('pt-br')}
      </span>
    </div>
  </VD.Wrapper>
  )
}