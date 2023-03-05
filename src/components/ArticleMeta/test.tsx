import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(
      screen.getByRole('link', { name: 'Jeferson Oliveira' }),
    ).toHaveAttribute('href', '/author/jeferson-oliveira');

    expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute(
      'href',
      '/category/tech',
    );

    expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute(
      'href',
      '/category/javascript',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);
    expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should to match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should to match snapshot with no author and categories', () => {
    const { container } = renderTheme(
      <ArticleMeta {...props} author={undefined} categories={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
