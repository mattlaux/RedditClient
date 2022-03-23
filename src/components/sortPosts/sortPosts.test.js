import React from 'react';
import {
  renderProviderAndRouter as render,
  screen,
} from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import SortPosts from './sortPosts';

describe('<SortPosts />', () => {
  test('renders category buttons', () => {
    render(<SortPosts />);
    const hotCategory = screen.getByRole('button', { name: /hot/i });
    const newCategory = screen.getByRole('button', { name: /new/i });
    const topCategory = screen.getByRole('button', { name: /top/i });

    expect(hotCategory).toBeInTheDocument();
    expect(newCategory).toBeInTheDocument();
    expect(topCategory).toBeInTheDocument();
  });

  test('renders gray background for active category', () => {
    render(<SortPosts />);
    const hotCategory = screen.getByRole('button', { name: /hot/i });
    const newCategory = screen.getByRole('button', { name: /new/i });

    expect(hotCategory).toHaveStyle('border-bottom: 3px solid lightblue');
    expect(newCategory).toHaveStyle('border-bottom: transparent');

    userEvent.click(newCategory);

    expect(hotCategory).toHaveStyle('border-bottom: transparent');
    expect(newCategory).toHaveStyle('border-bottom: 3px solid lightblue');
  });
});
