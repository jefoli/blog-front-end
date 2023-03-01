import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        dolorem nemo excepturi hic modi, aspernatur rerum molestias dignissimos
        iure asperiores consequuntur accusamus nihil, eligendi totam sint.
        Eligendi suscipit soluta in.
      </p>
    </div>
  );
};
