import { useEffect, useState } from "react"
import styled from "styled-components"
import { User } from "../../sdk/@types"
import PostService from "../../sdk/services/Post.service"
import UserService from "../../sdk/services/User.service"
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
          return <Profile key={editor.id} editorId={editor.id} name={editor.name} description="Editor há X meses" avatarUrl={editor.avatarUrls.small} />
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