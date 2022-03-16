import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortCategory: 'hot',
  error: null,
  status: 'idle',
  posts: []
};

export const sortPostsAsync = createAsyncThunk(
  'sortPosts/fetchPosts',
  async (sortCategory) => {
    try {
      const response = await fetch(`https://www.reddit.com/${sortCategory}.json`);
      if (response.ok) {
        const jsonResponse = await response.json();
        const posts = jsonResponse.data.children;
        return posts;
      }
      throw new Error('Request Failed!');
    } catch (error) {
      return error;
    }
  }
);

export const sortPostsSlice = createSlice({
  name: 'sortPosts',
  initialState,
  reducers: {
    changeSortCategory: (state, action) => {
      state.sortCategory = action.payload;
    },
    removePosts: (state) => {
      state.posts = [];
    },
    addPosts: (state, action) => {
      state.posts = action.payload;
    }
  },
  extraReducers: {
    [sortPostsAsync.pending]: (state) => {
      state.status = 'loading posts';
    },
    [sortPostsAsync.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    [sortPostsAsync.rejected]: (state, action) => {
      state.status = 'failed to retrieve posts';
      state.error = action.payload;
    }
  }
});

export const { changeSortCategory, removePosts, addPosts } = sortPostsSlice.actions;

export const selectSortCategory = (state) => state.sortPosts.sortCategory;
export const selectPosts = (state) => state.sortPosts.posts;

export default sortPostsSlice.reducer;