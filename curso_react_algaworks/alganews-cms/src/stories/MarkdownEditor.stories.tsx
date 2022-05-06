import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import MarkdownEditor, { MarkdownEditorProps }  from '../components/MarkdownEditor/MarkdownEditor';

export default {
  title: 'Example/MarkdownEditor',
  component: MarkdownEditor,
} as ComponentMeta<typeof MarkdownEditor>;

const Template: Story<MarkdownEditorProps> = (args) => <MarkdownEditor {...args} />;

export const Default = Template.bind({})
Default.args = { 
  
}