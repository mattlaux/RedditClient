import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sortPostsReducer from '../features/sortPosts/sortPostsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sortPosts: sortPostsReducer
  },
});
