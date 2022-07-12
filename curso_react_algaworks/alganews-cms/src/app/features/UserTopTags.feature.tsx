import styled from "styled-components";
import CircleChart from "../components/CircleChart";

export default function UserTopTags () {
  return (
    <UserTopTagsContainer>
      <CircleChart progress={80} size={88} caption={'PHP'} theme={'primary'}/>
      <CircleChart progress={50} size={88} caption={'Python'} />
      <CircleChart progress={95} size={88} caption={'GIT'} />
    </UserTopTagsContainer>
  )
}
const UserTopTagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`