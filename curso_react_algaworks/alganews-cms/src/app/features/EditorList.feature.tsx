import { useEffect, useState } from "react"
import { User, UserService } from "rospiel-react_alganews-sdk";
import styled from "styled-components"
import getEditorDescription from "../../core/utils/getEditorDescription"
import Profile from "../components/Profile/Profile"

export default function EditorReport() {
  const [editors, setEditors] = useState<User.EditorSummary[]>([]);
  
  useEffect(() => {
    UserService.getAllEditors()
    .then(setEditors)
  }, [])
  
  return (
    <EditorReportContainer>
      {
        editors.map(editor => {
          return <Profile key={editor.id} editorId={editor.id} name={editor.name} description={getEditorDescription(new Date(editor.createdAt))} avatarUrl={editor.avatarUrls.small} />
        })
      }
    </EditorReportContainer>  
  )
}

const EditorReportContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`