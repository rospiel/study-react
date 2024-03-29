import styled from "styled-components";
import Head from "../../core/Head";
import ErrorBoundary from "../components/ErrorBoundary";
import PostsList from "../features/PostsList.feature";
import UserEarnings from "../features/UserEarnings.feature";
import UserMetrics from "../features/UserMetrics.feature";
import UserTopTags from "../features/UserTopTags.feature";
import DefaultLayout from "../layouts/Default";

export default function Home () {
  return (
    <DefaultLayout>
      <Head title="Home" description="Tela de entrada"></Head>
      <UserTopTagsEarningsContainer>
        <ErrorBoundary component="tags mais usadas">
          <UserTopTags />
        </ErrorBoundary>
        
        <UserEarnings />
      </UserTopTagsEarningsContainer>
      <ErrorBoundary component="performance">
        <UserMetrics />  
      </ErrorBoundary>
      
      <ErrorBoundary component="lista de posts">
        <PostsList />
      </ErrorBoundary>
      
    </DefaultLayout>
  )
}

const UserTopTagsEarningsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 32px;
`