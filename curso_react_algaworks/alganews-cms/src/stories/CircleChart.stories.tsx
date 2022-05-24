import { ComponentMeta, Story } from '@storybook/react';

import CircleChart, { CircleChartProps }  from '../app/components/CircleChart';

export default {
  title: 'Example/CircleChart',
  component: CircleChart,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100
      }
    }
  }
} as ComponentMeta<typeof CircleChart>;

const Template: Story<CircleChartProps> = (args) => <CircleChart {...args} />;

export const Default = Template.bind({})
Default.args = { 
  progress: 80,
  size: 150,
  caption: "web"
}

export const Primary = Template.bind({})
Primary.args = { 
  progress: 80,
  size: 150,
  caption: "android",
  theme: "primary"
}
