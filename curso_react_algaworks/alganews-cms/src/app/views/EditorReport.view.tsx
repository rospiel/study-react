import DefaultLayout from "../layouts/Default/Default.layout";
import Head from "../../core/Head";
import EditorList from "../features/EditorList.feature";

export default function EditorReport() {
  return (
    <DefaultLayout>
      <Head title="Lista de Editores" description="Tela da lista de editores"></Head>
      <EditorList />
    </DefaultLayout>
  )
}