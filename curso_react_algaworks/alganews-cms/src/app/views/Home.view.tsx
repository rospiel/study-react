import styled from "styled-components";
import Head from "../../core/Head";
import PostsList from "../features/PostsList.feature";
import UserEarnings from "../features/UserEarnings.feature";
import UserMetrics from "../features/UserMetrics.feature";
import UserTopTags from "../features/UserTopTags.feature";
import DefaultLayout from "../layouts/Default";

export default function Home () {
  <Head title="Home" description="Tela de entrada"></Head>
  return (
    <DefaultLayout>
      <UserTopTagsEarningsContainer>
        <UserTopTags />
        <UserEarnings />
      </UserTopTagsEarningsContainer>
      
      <UserMetrics />
      <PostsList />
    </DefaultLayout>
  )
}

const UserTopTagsEarningsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 32px;
`