import styled from "styled-components"
import Profile from "../components/Profile/Profile"

export default function EditorReport() {
  return (
    <EditorReportContainer>
      <Profile name="Mariza Brito da Paixão" description="Editor à 2 anos"/>
      <Profile name="Maria Beatriz Rangel Diniz" description="Editor à 8 anos"/>
      <Profile name="Elielson Figueiras Werneck" description="Editor à 5 anos"/>
      <Profile name="Clevisson Milanez Spilman" description="Editor à 3 anos"/>
      <Profile name="Vicente Marins Antonio" description="Editor à 2 anos"/>

    </EditorReportContainer>  
  )
}

const EditorReportContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`