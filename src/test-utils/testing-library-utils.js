import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import postsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/comments/commentsSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { posts: postsReducer, comments: commentsReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='*' element={children} />
          </Routes>
        </Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

//re-export everything
export * from '@testing-library/react';
// override render method
export { render };




