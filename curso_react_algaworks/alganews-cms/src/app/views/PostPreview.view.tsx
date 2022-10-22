import { useEffect, useState } from "react"
import styled from "styled-components"
import withBoundary from "../../core/hoc/withBoundary"
import confirm from "../../core/utils/confirm"
import info from "../../core/utils/info"
import modal from "../../core/utils/modal"
import { Post } from "../../sdk/@types"
import PostService from "../../sdk/services/Post.service"
import { isNull, isTrue } from "../../sdk/utils/objectUtil"
import Button from "../components/Button/Button"
import { ConfirmProps } from "../components/Confirm/Confirm"
import { InfoProps } from "../components/Info/Info"
import Loading from "../components/Loading"
import MarkdownEditor from "../components/MarkdownEditor"

interface PostPreviewProps {
  postId: number
}

function PostPreview(props: PostPreviewProps) {
  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);

  async function publishPost() {
    await PostService.publishExistingPost(props.postId);
    info(buildInfoPublishPost());
  }

  function buildInfoPublishPost(): InfoProps {
    const info = {} as InfoProps;
    info.title = "Post publicado";
    info.description = "Você publicou o post com sucesso";
    return info;
  }

  function buildConfirmPublishPost(): ConfirmProps {
    const confirm = {} as ConfirmProps;
    confirm.question = "Publicar o post?";
    confirm.onConfirm = publishPost;
    confirm.onCancel = reOpenModal;
    return confirm;
  }

  function handlePublishSubmit(): void {
    confirm(buildConfirmPublishPost());
  }

  function reOpenModal() {
    modal({ children: <PostPreview postId={props.postId} />})
  }

  useEffect(() => {
    setLoading(true);
    PostService.getExistingPost(props.postId)
      .then(setPost)
      .finally(() => setLoading(false));
  }, [props.postId]);

  if (isTrue(loading)) {
    return <Loading show />
  }

  if (isNull(post)) {
    return null;
  }
  
  return (
    <Container>
      <div className="containerTitle">
        <span className="title">{post!.title}</span>
        <div>
          <Button className="buttonPublish" label="Publicar" variant="danger" disabled={isTrue(post!.published)} onClick={handlePublishSubmit} />
          <Button label="Editar" variant="primary" disabled={isTrue(post!.published)} onClick={() => window.location.pathname = `/posts/editar/${props.postId}`} />
        </div>
      </div>
      <div className="containerImage">
        <img src={post!.imageUrls.medium} alt="foto da postagem" />
      </div>
      <div className="containerText">
        <MarkdownEditor readOnly value={post!.body}/>
      </div>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 655px;
  height: 70vh;
  background-color: #F3F8FA;
  border: 1px solid #ccc;
  padding: 24px;
  overflow-y: auto;

  .containerTitle {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-weight: 900;
    size: 18px;
    line-height: 21.6px;
    color: #274060;
    font-style: normal;
  }

  .buttonPublish {
    margin-right: 8px;
  }

  .containerImage {
    
    display: flex; 
    justify-content: center;
    align-items: center;
  }

  .containerImage img {
    object-fit: cover;
    height: 240px;
    width: 607px;
  }

  .containerText {
    background: #FFFFFF;
    
  }
`

export default withBoundary(PostPreview, "Prévia do post");