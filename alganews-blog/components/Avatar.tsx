import Image from "next/image";
import { useState } from "react";
import styled from "styled-components"
import avatar from "../public/avatar.jpeg";

interface AvatarProps {
  src: string
  alt: string
}

export default function Avatar(props: AvatarProps) {
  const [src, setSrc] = useState(props.src);
  
  return (
    <Container>
      <StyledImage src={src} width={40} height={40} alt={props.alt} onError={(event) => {
        setSrc(avatar.src)
      }} />
    </Container>
    
  )
}

const StyledImage = styled(Image)`
  object-fit: cover;
`

const Container = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  box-shadow: 0 0 0 4px ${p => p.theme.primaryForeground}; 
  overflow: hidden;
`

