import { ComponentMeta, Story } from '@storybook/react';

import SessionController, { SessionControllerProps }  from '../app/components/SessionController/SessionController';

export default {
  title: 'Example/SessionController',
  component: SessionController,
} as ComponentMeta<typeof SessionController>;

const Template: Story<SessionControllerProps> = (args) => <SessionController {...args} />;

export const Default = Template.bind({})
Default.args = {
  onLogout: () => console.log("Olá"),
  name: "Rodrigo Santos",
  description: "criador de conteúdo há 3 anos"
}
