import { ComponentMeta, Story } from '@storybook/react';

import Profile, { ProfileProps }  from '../app/components/Profile/Profile';

export default {
  title: 'Example/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({})
Default.args = {
  name: "Rodrigo Santos",
  description: "criador de conteúdo há 3 anos"
  
}
