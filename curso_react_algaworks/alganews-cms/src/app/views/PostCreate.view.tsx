import Head from "../../core/Head";
import PostForm from "../features/PostForm.feature";
import DefaultLayout from "../layouts/Default";

export default function PostCreate() {
  return (
    <DefaultLayout>
      <Head title="Criar Post" description="Tela de criação de posts"></Head>
      <PostForm />
    </DefaultLayout>
  )
}