import Head from "../../core/Head";
import PostsList from "../features/PostsList.feature";
import UserMetrics from "../features/UserMetrics.feature";
import DefaultLayout from "../layouts/Default";

export default function Home () {
  <Head title="Home" description="Tela de entrada"></Head>
  return (
    <DefaultLayout>
      <UserMetrics />
      <PostsList />
    </DefaultLayout>
  )
}