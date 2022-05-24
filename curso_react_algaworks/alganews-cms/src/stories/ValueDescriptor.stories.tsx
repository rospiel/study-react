import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import ValueDescriptor, { ValueDescriptorProps }  from '../app/components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
} as ComponentMeta<typeof ValueDescriptor>;

const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  isDefault: true
}

export const DefaultCurrency = Template.bind({})
DefaultCurrency.args = {
  description: 'Ganhos no mês',
  value: 560322.02,
  isDefault: true,
  isCurrency: true
}

export const Primary = Template.bind({})
Primary.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  isDefault: false
}

export const PrimaryCurrency = Template.bind({})
PrimaryCurrency.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  isDefault: false,
  isCurrency: true
}
