import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortPosts from './sortPosts';
import { Provider } from 'react-redux';
import { store } from '../../app/store';


describe('<SortPosts />', () => {

  test('category buttons render', () => {
    
    render(
      <Provider store={store}>
        <SortPosts />
      </Provider>
    );
    const hotCategory = screen.getByRole('button', { name: /hot/i });
    const newCategory = screen.getByRole('button', { name: /new/i });
    const topCategory = screen.getByRole('button', { name: /top/i });

    expect(hotCategory).toBeInTheDocument();
    expect(newCategory).toBeInTheDocument();
    expect(topCategory).toBeInTheDocument();
  });

  test('clicked category has gray background', () => {
    
    render(
      <Provider store={store}>
        <SortPosts />
      </Provider>
    );
    const hotCategory = screen.getByRole('button', { name: /hot/i });
    const newCategory = screen.getByRole('button', { name: /new/i });

    expect(hotCategory).toHaveStyle('background-color: lightgray');
    expect(newCategory).toHaveStyle('background-color: transparent');
    userEvent.click(newCategory);
    expect(hotCategory).toHaveStyle('background-color: transparent');
    expect(newCategory).toHaveStyle('background-color: lightgray');
  });

});