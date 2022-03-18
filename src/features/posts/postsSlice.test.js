import postsReducer, { changeSortCategory, removePosts, fetchPosts } from './postsSlice';

describe('posts reducer', () => {
  const initialState = {
    sortCategory: 'hot',
    error: null,
    status: 'idle'
  };

  test('should handle initial state', () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual({
      sortCategory: 'hot',
      error: null,
      status: 'idle',
      posts: []
    });
  });

  test('should handle changeSortCategory', () => {
    const actual = postsReducer(initialState, changeSortCategory('new'));
    expect(actual.sortCategory).toEqual('new');
  });

  test('should handle removePosts', () => {
    const actual = postsReducer(initialState, removePosts());
    expect(actual.posts).toEqual([]);
  });

  test('should handle fetchPosts in progress', () => {
    const actual = postsReducer(initialState, fetchPosts.pending);
    expect(actual.status).toEqual('loading posts');
  });

  test('should handle sortPostsAsync fulfilled', () => {
    const actual = postsReducer(initialState, fetchPosts.fulfilled);
    expect(actual.status).toEqual('succeeded');
  });

  test('should handle sortPostsAsync failed', () => {
    const actual = postsReducer(initialState, fetchPosts.rejected);
    expect(actual.status).toEqual('failed to retrieve posts');
  });

});