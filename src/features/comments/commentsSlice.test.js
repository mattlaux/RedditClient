import commentsReducer, { fetchComments } from './commentsSlice';

describe('comments reducer', () => {
  const initialState = {
    error: '',
    commentFetchStatus: 'idle',
    comments: [],
  };

  test('should handle initial state', () => {
    expect(commentsReducer(undefined, { type: 'unknown' })).toEqual({
      error: '',
      commentFetchStatus: 'idle',
      comments: [],
    });
  });

  test('should handle fetchComments in progress', () => {
    const actual = commentsReducer(initialState, fetchComments.pending);
    expect(actual.commentFetchStatus).toEqual('loading comments');
  });

  test('should handle fetchComments fulfulled', () => {
    const actual = commentsReducer(initialState, fetchComments.fulfilled);
    expect(actual.commentFetchStatus).toEqual('succeeded');
  });

  test('should handle fetchComments failed', () => {
    const actual = commentsReducer(initialState, fetchComments.rejected);
    expect(actual.commentFetchStatus).toEqual('failed to retrieve comments');
  });
});
