import commentsReducer, { removeComments, fetchComments } from './commentsSlice';

describe ('comments reducer', () => {

  const initialState = {
    postPermalink: '',
    error: null,
    status: 'idle',
    comments: []
  };

  test('should handle initial state', () => {
    expect(commentsReducer(undefined, { type: 'unknown' })).toEqual({
      postPermalink: '',
      error: null,
      status: 'idle',
      comments: []
    });
  });

  test('should handle removeComments', () => {
    const actual = commentsReducer(initialState, removeComments());
    expect(actual.comments).toEqual([]);
  });

  test('should handle fetchComments in progress', () => {
    const actual = commentsReducer(initialState, fetchComments.pending);
    expect(actual.status).toEqual('loading comments');
  });

  test('should handle fetchComments fulfulled', () => {
    const actual = commentsReducer(initialState, fetchComments.fulfilled);
    expect(actual.status).toEqual('succeeded');
  });

  test('should handle fetchComments failed', () => {
    const actual = commentsReducer(initialState, fetchComments.rejected);
    expect(actual.status).toEqual('failed to retrieve comments');
  });

});