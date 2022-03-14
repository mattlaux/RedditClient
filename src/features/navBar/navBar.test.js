import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './navBar';

describe('<NavBar />', () => {

  test('logo renders', () => {
    render(<NavBar />);
    const logo = screen.getByRole('img', {name: /reddit logo/i});
    const redditTitle = screen.getByRole('heading', { name: /reddit/i});
    
    expect(logo).toBeInTheDocument();
    expect(redditTitle).toBeInTheDocument();
  });

  test('home link sends user back to main screen', () => {
    render(<NavBar />);
    const homeButton = screen.getByRole('navigation', { name: /home/i});

    expect(homeButton).toBeInTheDocument();
  });

  test('search Reddit bar initializes with Search Reddit, clears on click, and accepts typed input', () => {
    render(<NavBar />);
    const searchBar = screen.getByRole('search', { name: /search reddit/i});

    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toHaveValue(/search reddit/i);
    userEvent.click(searchBar);
    expect(searchBar).toBeEmptyDOMElement();
    userEvent.type('Test input for reddit search bar');
    expect(searchBar).toHaveValue(/test input for reddit search bar/i);
  });

});