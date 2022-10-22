import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { Tag } from "react-tag-input"
import styled from "styled-components"
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown"
import info from "../../core/utils/info"
import { Post } from "../../sdk/@types"
import PostService from "../../sdk/services/Post.service"
import { isEmpty, isNull, nonNull } from "../../sdk/utils/objectUtil"
import Button from "../components/Button/Button"
import ImageUpload from "../components/ImageUpload"
import Input from "../components/Input/Input"
import Loading from "../components/Loading"
import MarkdownEditor from "../components/MarkdownEditor"
import TagInput from "../components/TagInput"
import WordPriceCounter from "../components/WordPriceCounter"

interface PostFormProps {
  postId?: number
}

export default function PostForm(props: PostFormProps) {
  function validateForm(title: string, imageUrl: string, body: string, tags: Tag[]) {
    return isEmpty(title) || isEmpty(imageUrl) || isEmpty(body) || tags.length === 0;
  }
  
  function addTag(tag: Tag) {
    setTags([...tags, tag]);
  }

  function removeTag(index: number) {
    let filter = tags.filter((tag, position) => position !== index);
    setTags(filter);
  }

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    setPublishing(true);
    event.preventDefault();
    
    try {
      isNull(props.postId) ? await save() : await update(props.postId!);
      history.push("/");
    } finally {
      setPublishing(false);
    }
  }

  function fetchPost(postId: number) {
    PostService.getExistingPost(postId)
      .then(post => {
        setTitle(post.title);
        setImageUrl(post.imageUrls.default);
        setBody(post.body);
        setTags(post.tags.map(tag => ({ id: tag, text: tag })));
      })
  }
  
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [publishing, setPublishing] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (nonNull(props.postId)) {
      fetchPost(props.postId!);
    }
  }, [props.postId])

  async function save() {
    const newPost = {} as Post.Input; 
    newPost.body = body;
    newPost.title = title;
    newPost.tags = tags.map(tag => tag.text);
    newPost.imageUrl = imageUrl;
    
    await PostService.insertPost(newPost);
    info({title: 'Post salvo com sucesso', description: 'Você acabou de     salvar o post'});
  }

  async function update(postId: number) {
    const newPost = {} as Post.Input; 
    newPost.body = body;
    newPost.title = title;
    newPost.tags = tags.map(tag => tag.text);
    newPost.imageUrl = imageUrl;
    
    await PostService.updateExistingPost(postId, newPost);
    info({title: 'Post salvo com sucesso', description: 'Você acabou de     atualizar o post'});
  }

  return (
    <PostFormContainer onSubmit={event => handleFormSubmit(event)} >
      <Loading show={publishing} />

      <Input label="título" placeholder="e.g.: Como fiquei rico aprendendo React" value={title} onChange={event => setTitle(event.currentTarget.value)} />
      <ImageUpload onImageUpload={setImageUrl} label="Thumbnail do post" preview={imageUrl} />
      <MarkdownEditor onChange={setBody} value={body} />
      <TagInput tags={tags} onAdd={tag => addTag(tag)} onDelete={index => removeTag(index)} placeholder="Insira as tags deste post"/>

      <PostFormSubmitContainer>
        <WordPriceCounter pricePerWord={0.25} wordsCount={countWordsInMarkdown(body)} />
        <Button variant="primary" label="Salvar post" type="submit" disabled={validateForm(title, imageUrl, body, tags)} />

      </PostFormSubmitContainer>
    </PostFormContainer>
  )
}

const PostFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PostFormSubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
`