import React from 'react';
import {
  renderProviderAndRouter as render,
  screen,
} from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import NavBar from './navBar';

describe('<NavBar />', () => {
  test('renders logo', () => {
    render(<NavBar />);

    const logo = screen.getByRole('img', { name: /reddit logo/i });
    const redditTitle = screen.getByRole('heading', { name: /reddit/i });
    expect(logo).toBeInTheDocument();
    expect(redditTitle).toBeInTheDocument();
  });

  test('renders search Reddit bar initialized with placeholder Search Reddit and accepts typed input', () => {
    render(<NavBar />);

    const searchBar = screen.getByPlaceholderText(/search reddit/i);
    expect(searchBar).toBeInTheDocument();
    userEvent.click(searchBar);
    userEvent.type(searchBar, 'Test input for reddit search bar');
    expect(searchBar).toHaveValue('Test input for reddit search bar');
  });

  test('allows a max of 50 characters in the search bar', () => {
    render(<NavBar />);

    const searchBar = screen.getByPlaceholderText(/search reddit/i);
    expect(searchBar.maxLength).toBe(50);
  });
});
