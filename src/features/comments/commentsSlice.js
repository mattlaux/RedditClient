import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  postPermalink: '',
  error: null,
  status: 'idle',
  comments: []
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postPermalink) => {
    const response = await fetch(`https://www.reddit.com/${postPermalink}.json`);
    if (response.ok) {
      const jsonResponse = await response.json();
      const comments = jsonResponse.data[1].data.children;
      return comments;
    }
    throw new Error('Request Failed!');
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    removeComments: (state) => {
      state.comments = [];
    }
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.status = 'loading comments';
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.comments = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.status = 'failed to retrieve comments';
      state.error = action.payload;
    }
  }
});

export const { removeComments } = commentsSlice.actions;

export const selectStatus = (state) => state.comments.status;
export const selectComments = (state) => state.comments.comments;

export default commentsSlice.reducer;