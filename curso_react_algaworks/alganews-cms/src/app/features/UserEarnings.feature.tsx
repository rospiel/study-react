import { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings () {
  const [user, setUser] = useState<User.Detailed>();

  useEffect(() => {
    UserService.getDetailedUser(6)
    .then(setUser);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <UserEarningsContainer>
      <ValueDescriptor isDefault={true} description="Ganhos no mês" value={user.metrics.monthlyEarnings} isCurrency={true} />
      <ValueDescriptor isDefault={true} description="Ganhos na semana" value={user.metrics.weeklyEarnings} isCurrency={true} />
      <ValueDescriptor isDefault={false} description="Ganhos de sempre" value={user.metrics.lifetimeEarnings} isCurrency={true} />
      <ValueDescriptor isDefault={false} description="Total de palavras" value={user.metrics.lifetimeWords} isCurrency={false} />
    </UserEarningsContainer>
  )
}

const UserEarningsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px
`