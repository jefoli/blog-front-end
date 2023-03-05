import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTags, PostTagsProps } from './index';

import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
  parameters: {
    layout: 'padded',
  },
} as Meta<PostTagsProps>;

export const Template: Story<PostTagsProps> = (args) => {
  return (
    <div>
      <PostTags {...args} />
    </div>
  );
};

export const NoTags: Story<PostTagsProps> = (args) => {
  return (
    <div>
      <PostTags {...args} tags={undefined} />
    </div>
  );
};
