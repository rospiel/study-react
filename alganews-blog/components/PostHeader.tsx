import Image from "next/image";
import styled from "styled-components";
import formatPostDate from "../core/utils/formatPostDate";

interface PostHeaderProps {
  thumbnail: string;
  createdAt: string;
  editor: string;
  title: string;
}

export default function PostHeader(props: PostHeaderProps) {
  return (
      <Container picture={props.thumbnail}>
        <div className="thumbnail"></div>
        <div className="editor">
          <EditorImage className="avatar" src={props.editor} alt="imagem do editor" width={64} height={64} />
        </div>
        <span>{formatPostDate(props.createdAt)}</span>
        <h1>{props.title}</h1>
      </Container>
  )
}

const Container = styled.div<{ picture: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  .thumbnail {
    background-image: url(${p => p.picture});
    background-position: center;
    background-size: cover;
    border-top-left-radius: ${p => p.theme.borderRadius};
    border-top-right-radius: ${p => p.theme.borderRadius};
    width: 100%;
    min-height: 256px;

    @media screen and (max-width: 767px) {
      border-radius: ${p => p.theme.borderRadius};
      margin: 16px;
    }
  }

  .editor {
    margin-top: -55px;
    border-radius: 32px;
    z-index: 2;
    box-shadow: 0 0 0 4px ${p => p.theme.activeElementBackground};

    @media screen and (max-width: 767px) {
      margin-top: -69px;
    }
  }

  h1 {
    font-size: 36px;
    line-height: 43px;
    text-align: center;
  }
`

const EditorImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`