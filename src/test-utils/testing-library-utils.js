import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import postsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/comments/commentsSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*
Sets up two different custom renders to be used for testing purposes:
  1. A custom render with a provider wrapper and a router wrapper (Used for majority of components)
  2. A custom render with just a provider wrapper (Used for App component as App already has router)
See https://testing-library.com/docs/react-testing-library/setup/ for more info on custom renders
*/

function renderProviderAndRouter(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { posts: postsReducer, comments: commentsReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="*" element={children} />
          </Routes>
        </Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

function renderProvider(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { posts: postsReducer, comments: commentsReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

//re-export everything
export * from '@testing-library/react';
// override render method
export { renderProviderAndRouter, renderProvider };
