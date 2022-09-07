import { useEffect } from "react"
import styled from "styled-components"
import PostService from "../../sdk/services/Post.service"
import Profile from "../components/Profile/Profile"

export default function EditorReport() {
  useEffect(() => {
    const posts = PostService.getAllPosts({
      editorId: 7
    });
    console.log(posts);
  }, [])
  
  return (
    <EditorReportContainer>
      <Profile editorId={1} name="Mariza Brito da Paixão" description="Editor à 2 anos"/>
      <Profile editorId={2} name="Maria Beatriz Rangel Diniz" description="Editor à 8 anos"/>
      <Profile editorId={3} name="Elielson Figueiras Werneck" description="Editor à 5 anos"/>
      <Profile editorId={4} name="Clevisson Milanez Spilman" description="Editor à 3 anos"/>
      <Profile editorId={5} name="Vicente Marins Antonio" description="Editor à 2 anos"/>

    </EditorReportContainer>  
  )
}

const EditorReportContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`