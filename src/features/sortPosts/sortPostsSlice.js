import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortCategory: 'hot',
  error: null,
  status: 'idle'
};

export const sortPostsAsync = createAsyncThunk(
  'sortPosts/fetchPosts',
  async (state) => {
    try {
      const response = await fetch(`https://www.reddit.com/${state.sortCategory}.json`);
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.data.children;
      }
      throw new Error('Request Failed!');
    } catch (error) {
      state.error = error;
    }
  }
);

export const sortPostsSlice = createSlice({
  name: 'sortPosts',
  initialState,
  reducers: {
    changeSortCategory: (state, action) => {
      state.sortCategory = action.payload;
    }
  },
  extraReducers: {
    [sortPostsAsync.pending]: (state) => {
      state.status = 'loading posts';
    },
    [sortPostsAsync.fulfilled]: (state) => {
      state.status = 'succeeded';
    },
    [sortPostsAsync.rejected]: (state) => {
      state.status = 'failed to retrieve posts';
    }
  }
});

export const { changeSortCategory } = sortPostsSlice.actions;

export const selectSortCategory = (state) => state.sortPosts.sortCategory;

export default sortPostsSlice.reducer;