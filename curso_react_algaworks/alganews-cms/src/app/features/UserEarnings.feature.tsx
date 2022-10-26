import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { User, UserService } from "rospiel-react_alganews-sdk";
import isNull, { nonNull } from "rospiel-react_alganews-sdk/dist/utils/objectUtil";
import styled from "styled-components";
import withBoundary from "../../core/hoc/withBoundary";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

function UserEarnings () {
  const [user, setUser] = useState<User.Detailed>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    UserService.getDetailedUser(6)
    .then(setUser)
    .catch(error => {
      setError(new Error(error.message));
    });
  }, []);

  if (nonNull(error)) {
    throw error;
  }

  if (isNull(user)) {
    return (
        <UserEarningsContainer>
          <Skeleton height={40} width={150}/>
          <Skeleton height={40} width={150}/>
          <Skeleton height={40} width={150}/>
          <Skeleton height={40} width={150}/>
        </UserEarningsContainer>
    )
  }

  return (
    <UserEarningsContainer>
      <ValueDescriptor isDefault={true} description="Ganhos no mês" value={user!.metrics.monthlyEarnings} isCurrency={true} />
      <ValueDescriptor isDefault={true} description="Ganhos na semana" value={user!.metrics.weeklyEarnings} isCurrency={true} />
      <ValueDescriptor isDefault={false} description="Ganhos de sempre" value={user!.metrics.lifetimeEarnings} isCurrency={true} />
      <ValueDescriptor isDefault={false} description="Total de palavras" value={user!.metrics.lifetimeWords} isCurrency={false} />
    </UserEarningsContainer>
  )
}

const UserEarningsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px
`

export default withBoundary(UserEarnings, "performance do usuário");