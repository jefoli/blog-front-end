import { DiscussionEmbed } from 'disqus-react';
import * as Styled from './styles';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null;

  const config = {
    url: `http://xxxx.vercel.app/post/${slug}/`,
    identifier: id,
    title: title,
    language: 'pt_BR',
  };

  return (
    <Styled.Wrapper>
      <DiscussionEmbed shortname="blog-jeferson-oliveira" config={config} />
    </Styled.Wrapper>
  );
};
