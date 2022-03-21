import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortCategory: 'hot',
  error: '',
  status: 'idle',
  posts: [],
  searchContent: '',
  detailPost: {}
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (sortCategory) => {
    const response = await fetch(`https://www.reddit.com/${sortCategory}.json`);
    if (response.ok) {
      const jsonResponse = await response.json();
      const posts = jsonResponse.data.children;
      return posts;
    }
    throw new Error('Request Failed!');
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changeSortCategory: (state, action) => {
      state.sortCategory = action.payload;
    },
    removePosts: (state) => {
      state.posts = [];
    },
    updateSearch: (state, action) => {
      state.searchContent = action.payload;
    },
    setDetailPost: (state, action) => {
      state.detailPost = action.payload;
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading posts';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed to retrieve posts';
      state.error = action.payload;
    }
  }
});

export const { changeSortCategory, removePosts, updateSearch, setDetailPost } = postsSlice.actions;

export const selectSortCategory = (state) => state.posts.sortCategory;
export const selectPosts = (state) => state.posts.posts;
export const selectStatus = (state) => state.posts.status;
export const selectSearchContent = (state) => state.posts.searchContent;
export const selectDetailPost = (state) => state.posts.detailPost;

export default postsSlice.reducer;