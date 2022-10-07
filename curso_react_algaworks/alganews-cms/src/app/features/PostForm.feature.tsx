import React, { useState } from "react"
import { Tag } from "react-tag-input"
import styled from "styled-components"
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown"
import info from "../../core/utils/info"
import PostService from "../../sdk/services/Post.service"
import Button from "../components/Button/Button"
import ImageUpload from "../components/ImageUpload"
import Input from "../components/Input/Input"
import Loading from "../components/Loading"
import MarkdownEditor from "../components/MarkdownEditor"
import TagInput from "../components/TagInput"
import WordPriceCounter from "../components/WordPriceCounter"

export default function PostForm() {
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
    const newPost = {
      body, 
      title, 
      tags: tags.map(tag => tag.text), 
      imageUrl
    }

    try {
      const insertedPost = await PostService.insertPost(newPost);
      info({title: 'Post salvo com sucesso', description: 'Você acabou de salvar o post, id gerado ' + insertedPost.id})
    } finally {
      setPublishing(false);
    }
  }
  
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [publishing, setPublishing] = useState(false);


  return (
    <PostFormContainer onSubmit={event => handleFormSubmit(event)} >
      <Loading show={publishing} />

      <Input label="título" placeholder="e.g.: Como fiquei rico aprendendo React" value={title} onChange={event => setTitle(event.currentTarget.value)} />
      <ImageUpload onImageUpload={setImageUrl} label="Thumbnail do post" />
      <MarkdownEditor onChange={setBody} />
      <TagInput tags={tags} onAdd={tag => addTag(tag)} onDelete={index => removeTag(index)} placeholder="Insira as tags deste post"/>

      <PostFormSubmitContainer>
        <WordPriceCounter pricePerWord={0.25} wordsCount={countWordsInMarkdown(body)} />
        <Button variant="primary" label="Salvar post" type="submit" />

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