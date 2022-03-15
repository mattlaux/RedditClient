import sortPostsReducer, { changeSortCategory } from './sortPostsSlice';

describe('sort posts reducer', () => {
  const initialState = {
    sortCategory: 'hot',
    error: null,
    status: 'idle'
  };

  test('should handle initial state', () => {
    expect(sortPostsReducer(undefined, { type: 'unknown' })).toEqual({
      sortCategory: 'hot',
      error: null,
      status: 'idle',
    });
  });

  test('should handle sortPostsAsync', () => {
    const newSortCategory = sortPostsReducer(initialState, changeSortCategory('new'));
    expect(newSortCategory.sortCategory).toEqual('new');
  });

});