import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../_constants";
import ServerErrorImage from "../public/server_error.svg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <Container>
      <Head>
        <title>Erro interno - 500</title>
      </Head>
      <Image src={ServerErrorImage} width={200} height={200} objectFit="contain" alt="erro interno" />
      <h1>Erro interno</h1>
      <Link className="backToHome" href={"/?page=1"} >Tentar acessar a Home</Link>
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