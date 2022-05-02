import { ComponentMeta, Story } from '@storybook/react';
import TagInput, { TagInputProps }  from '../components/TagInput/TagInput';
import { Tag } from 'react-tag-input';
import { useState } from 'react';

export default {
  title: 'Example/TagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({})
Default.args = { 
  placeholder: "Insira as tags deste post",
  tags: [{ id: "1", text: "Javascript" }]
}

export const VariousTags = Template.bind({})
VariousTags.args = { 
  placeholder: "Insira as tags deste post",
  tags: [
    { id: "1", text: "Javascript" },
    { id: "2", text: "Java" },
    { id: "3", text: "Python" },
    { id: "4", text: "PHP" },
    { id: "5", text: "Sql Server" }
  ]
}

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([]);

  function addTag(tag: Tag) {
    setTags([...tags, tag]);
  }

  function removeTag(index: number) {
    let filter = tags.filter((tag, position) => position !== index);
    setTags(filter);
  }

  return (
    <TagInput placeholder="Insira as tags deste post"
     tags={tags} onAdd={tag => addTag(tag)} onDelete={index => removeTag(index)} />
  )
}
