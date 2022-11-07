import Link from "next/link";
import { transparentize } from "polished";
import { Post } from "rospiel-react_alganews-sdk";
import styled from "styled-components";
import Avatar from "./Avatar";

interface PostProps {
  postSummary: Post.Summary;
}

export default function PostFeature(props: PostProps) {
  const { id, slug } = props.postSummary;
  
  return (
    <ContainerLink href={`/posts/${id}/${slug}`} passHref> 
      <Container image={props.postSummary.imageUrls.medium}>
        <div className="bgImage"></div>
        <div className="content">
          <ul>
            {props.postSummary.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="editor">
            <Avatar src={props.postSummary.editor.avatarUrls.small} alt="imagem do editor" />
            <div className="description">
              <p className="name">{props.postSummary.editor.name}</p>
              <p className="postDate">há 3 dias</p>
            </div>
          </div>
          <h2>{props.postSummary.title}</h2>
        </div>
      </Container>
    </ContainerLink>
  );
}

const ContainerLink = styled(Link)`
  width: 100%;
`

const Container = styled.a<{ image: string }>`
  text-decoration: none;
  transition: box-shadow 0.25s ease;

  &:hover, 
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${p => transparentize(0.7, p.theme.primaryBackground)};
  }

  position: relative;
  background-color: ${p => p.theme.primaryBackground};
  color: ${p => p.theme.primaryForeground};
  border-radius: ${p => p.theme.borderRadius};
  padding: 32px;
  width: 100%;
  min-height: 256px;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  .content {
    position: relative;
    z-index: 1;
    gap: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .bgImage {
    background-image: url(${p => p.image});
    position: absolute;
    inset: 0;
    background-color: yellow;
    z-index: 0;
    opacity: 0.05;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 8px;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  li {
    background-color: ${p => p.theme.activeElementBackground};
    color: ${p => p.theme.activeElementForeground};
    border-radius: ${p => p.theme.borderRadius};
    text-transform: lowercase;
    padding: 4px 8px;
    cursor: default;
    font-size: 12px;
    width: auto;
  }

  .editor {
    display: flex;
    gap: 16px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .postDate {
    font-size: 12px;
  }

  .name {
    font-size: 14px;
    font-weight: 700;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
  }
`