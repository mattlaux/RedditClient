import postsReducer, {
  changeSortCategory,
  removePosts,
  fetchPosts,
  updateSearch,
} from './postsSlice';

describe('posts reducer', () => {
  const initialState = {
    sortCategory: 'hot',
    error: '',
    postsFetchStatus: 'idle',
    posts: [],
    searchContent: '',
  };

  test('should handle initial state', () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual({
      sortCategory: 'hot',
      error: '',
      postsFetchStatus: 'idle',
      posts: [],
      searchContent: '',
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
    expect(actual.postsFetchStatus).toEqual('loading posts');
  });

  test('should handle sortPostsAsync fulfilled', () => {
    const actual = postsReducer(initialState, fetchPosts.fulfilled);
    expect(actual.postsFetchStatus).toEqual('succeeded');
  });

  test('should handle sortPostsAsync failed', () => {
    const actual = postsReducer(initialState, fetchPosts.rejected);
    expect(actual.postsFetchStatus).toEqual('failed to retrieve posts');
  });

  test('should handle updateSearch', () => {
    const actual = postsReducer(initialState, updateSearch('test search'));
    expect(actual.searchContent).toEqual('test search');
  });
});
