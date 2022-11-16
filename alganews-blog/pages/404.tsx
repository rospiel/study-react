import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants";
import NotFoundImage from "../public/not_found.svg";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <Image src={NotFoundImage} width={200} height={200} objectFit="contain" alt="não encontrado" />
      <h1>Página não encontrada</h1>
      <Link className="backToHome" href={"/?page=1"} >Voltar para a Home</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);

  .backToHome {
    color: ${p => p.theme.primaryBackground};
    text-decoration: none;
  }
`