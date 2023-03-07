import { request } from 'graphql-request';
import config from '../config/index';
import { defaultLoadPostsVariables, loadPosts } from './load-posts';

jest.mock('graphl-request');

jest.mock('../graphql/queries', () => {
  return {
    GRAPQL_QUERY: 'A_QUERY',
  };
});

describe('load-posts', () => {
  it('should call request with default variables', async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(
      config.graphqLURL,
      'A_QUERY',
      defaultLoadPostsVariables,
    );
  });

  it('should call request with custom variables', async () => {
    await loadPosts({
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });

    expect(request).toHaveBeenCalledWith(config.graphqLURL, 'A_QUERY', {
      ...defaultLoadPostsVariables,
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });
  });
});
