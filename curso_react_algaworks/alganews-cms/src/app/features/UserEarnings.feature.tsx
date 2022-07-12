import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings () {
  return (
    <UserEarningsContainer>
      <ValueDescriptor isDefault={true} description="Ganhos no mês" value={69887.4} isCurrency={true} />
      <ValueDescriptor isDefault={false} description="Ganhos no dia" value={100} isCurrency={true} />
      <ValueDescriptor isDefault={false} description="Ganhos no ano" value={7869587.4} isCurrency={true} />
      <ValueDescriptor isDefault={true} description="Total de palavras" value={7896} isCurrency={false} />
    </UserEarningsContainer>
  )
}

const UserEarningsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px
`