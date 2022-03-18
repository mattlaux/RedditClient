import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import SortPosts from './sortPosts';

describe('<SortPosts />', () => {

  test('category buttons render', () => {
    
    render(<SortPosts />);
    const hotCategory = screen.getByRole('button', { name: /hot/i });
    const newCategory = screen.getByRole('button', { name: /new/i });
    const topCategory = screen.getByRole('button', { name: /top/i });

    expect(hotCategory).toBeInTheDocument();
    expect(newCategory).toBeInTheDocument();
    expect(topCategory).toBeInTheDocument();
  });

  test('clicked category has gray background', () => {
    
    render(<SortPosts />);
    const hotCategory = screen.getByRole('button', { name: /hot/i });
    const newCategory = screen.getByRole('button', { name: /new/i });

    expect(hotCategory).toHaveStyle('background-color: lightgray');
    expect(newCategory).toHaveStyle('background-color: transparent');
    userEvent.click(newCategory);
    expect(hotCategory).toHaveStyle('background-color: transparent');
    expect(newCategory).toHaveStyle('background-color: lightgray');
  });

});