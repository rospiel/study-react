import { useState } from "react"
import { Tag } from "react-tag-input"
import styled from "styled-components"
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown"
import Button from "../components/Button/Button"
import ImageUpload from "../components/ImageUpload"
import Input from "../components/Input/Input"
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
  
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState('');

  return (
    <PostFormContainer>
      <Input label="título" placeholder="e.g.: Como fiquei rico aprendendo React" />
      <ImageUpload label="Thumbnail do post" />
      <MarkdownEditor onChange={setBody} />
      <TagInput tags={tags} onAdd={tag => addTag(tag)} onDelete={index => removeTag(index)} placeholder="Insira as tags deste post"/>

      <PostFormSubmitContainer>
        <WordPriceCounter pricePerWord={0.25} wordsCount={countWordsInMarkdown(body)} />
        <Button variant="primary" label="Salvar post" type="submit" />

      </PostFormSubmitContainer>
    </PostFormContainer>
  )
}

const PostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PostFormSubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
`