import { ComponentMeta, Story } from '@storybook/react';

import ImageUpload, { ImageUploadProps }  from '../app/components/ImageUpload/ImageUpload';

export default {
  title: 'Example/ImageUpload',
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>;

const Template: Story<ImageUploadProps> = (args) => <ImageUpload {...args} />;

export const Default = Template.bind({})
Default.args = { 
  label: 'Thumbnail do post'
}
