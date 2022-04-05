import { ComponentMeta, Story } from '@storybook/react';

import ProgressBar, { ProgressBarProps }  from '../components/ProgressBar/ProgressBar';

export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: { 
      control: { type: 'range', min: 0, max: 100 },
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  title: 'Javascript',
  progress: 10,
  theme: 'primary',
  width: 296
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Javascript',
  progress: 10,
  theme: 'secondary',
  width: 296
}

export const Complete = Template.bind({})
Complete.args = {
  title: 'Javascript',
  progress: 100,
  theme: 'secondary',
  width: 296
}

export const ZeroProgress = Template.bind({})
ZeroProgress.args = {
  title: 'Javascript',
  progress: 0,
  theme: 'primary',
  width: 296
}

export const HalfProgress = Template.bind({})
HalfProgress.args = {
  title: 'Javascript',
  progress: 50,
  theme: 'primary',
  width: 296
}
