import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paragraph  from '../components/Typography/Paragraph';

export default {
  title: 'Typograph/Paragraph',
  component: Paragraph,
  //argTypes: {
    //backgroundColor: { control: 'color' },
  //},
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({})
Default.args = {
  size: 'default',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
}