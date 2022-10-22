import Head from "../../core/Head";
import PostForm from "../features/PostForm.feature";
import DefaultLayout from "../layouts/Default";
import { useParams } from "react-router-dom";

export default function PostEdit() {
  const params = useParams<{ id: string }>();
  return (
    <DefaultLayout>
      <Head title="Edição Post" description="Tela de edição de posts"></Head>
      <PostForm postId={Number(params.id)} />
    </DefaultLayout>
  )
}