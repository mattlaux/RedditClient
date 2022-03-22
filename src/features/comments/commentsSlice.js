import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  commentFetchStatus: 'idle',
  comments: [],
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postPermalink) => {
    const response = await fetch(
      `https://www.reddit.com${postPermalink}.json`
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      const comments = jsonResponse[1].data.children;
      return comments;
    }
    throw new Error('Request Failed!');
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.commentFetchStatus = 'loading comments';
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.commentFetchStatus = 'succeeded';
      state.comments = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.commentFetchStatus = 'failed to retrieve comments';
      state.error = action.payload;
    },
  },
});

export const selectCommentFetchStatus = (state) => state.comments.commentFetchStatus;
export const selectComments = (state) => state.comments.comments;

export default commentsSlice.reducer;
