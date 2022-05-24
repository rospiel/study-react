import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import Input, { InputProps }  from '../app/components/Input/Input';

export default {
  title: 'Example/Input',
  component: Input,
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const WithPlaceholder = Template.bind({})

WithPlaceholder.args = {
  placeholder: 'Example placeholder'
}

export const WithLabelAndPlaceholder = Template.bind({})

WithLabelAndPlaceholder.args = {
  label: 'Name',
  placeholder: 'Example placeholder'
}

export const WithLabelPlaceholderAndContent = Template.bind({})

WithLabelPlaceholderAndContent.args = {
  label: 'Name',
  placeholder: 'Example placeholder',
  value: 'My name'
}

export const WithContent = Template.bind({})

WithContent.args = {
  value: 'My name'
}