import { useEffect, useState } from "react"
import styled from "styled-components"
import useEditors from "../../core/hooks/useEditors";
import getEditorDescription from "../../core/utils/getEditorDescription"
import Profile from "../components/Profile/Profile"

export default function EditorReport() {
  const { editorList, loading, fetchAllEditors } = useEditors();
  
  useEffect(() => {
    fetchAllEditors();
  }, [fetchAllEditors])
  
  return (
    <EditorReportContainer>
      {
        editorList.map(editor => {
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