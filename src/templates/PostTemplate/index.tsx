import { Comments } from '../../components/Comments';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { PostStrapi } from '../../shared-typed/post-strapi';
import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../Base';
import * as Styled from './styles';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post?: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
      <Comments
        title={post.title}
        slug={post.id}
        allowComments={post.allowComments}
      />
    </BaseTemplate>
  );
};
