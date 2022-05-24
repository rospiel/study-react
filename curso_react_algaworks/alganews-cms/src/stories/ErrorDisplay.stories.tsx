import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import ErrorDisplay, { ErrorDisplayProps }  from '../app/components/ErrorDisplay/ErrorDisplay';

export default {
  title: 'Example/ErrorDisplay',
  component: ErrorDisplay,
} as ComponentMeta<typeof ErrorDisplay>;

const Template: Story<ErrorDisplayProps> = (args) => <ErrorDisplay {...args} />;

export const Default = Template.bind({})
Default.args = { 
  small: false
}

export const CustomTitle = Template.bind({})
CustomTitle.args = { 
  small: false,
  title: "Custom Title"
}

export const CustomMessage = Template.bind({})
CustomMessage.args = { 
  small: false,
  message: "Custom Message"
}

export const Small = Template.bind({})
Small.args = { 
  small: true
}
