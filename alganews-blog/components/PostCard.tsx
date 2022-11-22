import Image from "next/image";
import Link from "next/link";
import { transparentize } from "polished";
import { Post } from "rospiel-react_alganews-sdk";
import styled from "styled-components";
import formatPostDate from "../core/utils/formatPostDate";

interface PostCardProps {
  post: Post.Summary
}

export default function PostCard(props: PostCardProps) {
  return (
    <Link href={`/posts/${props.post.id}/${props.post.slug}`} passHref>
      <Container bg={props.post.imageUrls.small}>
        <div className="thumbnail"></div>
        <div className="info" >
          <div className="editor">
            <EditorImage className="avatar" src={props.post.editor.avatarUrls.small} alt="imagem do editor" width={64} height={64} />
          </div>
          <p className="publishDate">{formatPostDate(props.post.createdAt)}</p>
          <h2 className="title">{props.post.title}</h2>
        </div>
        
      </Container>
    </Link>
  )
}

const Container = styled.a<{bg: string}>`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: 0 3px 6px ${p => transparentize(0.9, p.theme.activeElementForeground)};
  position: relative;
  min-height: 256px;
  display: block;

  transition: 0.25s ease;

  * {
    transition: 0.25s ease;
  }

  &:hover, 
  &:focus {
    background-color: ${p => p.theme.primaryBackground};
    box-shadow: 0 0 0 4px ${p => transparentize(0.7, p.theme.primaryBackground)};
    outline: none;

    .info, 
    p {
      color: ${p => p.theme.primaryForeground};
    }

    .thumbnail {
      height: 100%;
      opacity: 0.4;
      border-radius: ${(p) => p.theme.borderRadius};
    }
  }

  .thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;

    background-image: url(${p => p.bg});
    background-position: center;
    background-size: cover;
    border-top-left-radius: ${p => p.theme.borderRadius};
    border-top-right-radius: ${p => p.theme.borderRadius}
  }

  .info {
    position: absolute;
    z-index: 2;
    top: 50%;
    height: 50%;
    left: 0;
    margin-top: -32px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .editor {
    position: relative;
    z-index: 2;
    border-radius: 32px;
    width: 64px;
    height: 64px;
    box-shadow: 0 0 0 4px ${p => p.theme.activeElementBackground};
  }

  .publishDate {
    font-size: 12px;
    color: ${p => transparentize(0.5, p.theme.activeElementForeground)};
  }

  .title {
    text-align: center;
    font-size: 14px;
  }
`

const EditorImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`