import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import HomePageContainer from './HomePageContainer';

describe('<HomePageContainer />', () => {

  test('returns to main page with hot post loaded when Home link is clicked', async () => {
    render(<HomePageContainer />);

    const newButton = screen.getByRole('button', { name: /new/i });
    userEvent.click(newButton);
    const loadingTextNew = await screen.findByText(/loading posts/i);
    expect(loadingTextNew).toBeInTheDocument();
    const posts = await screen.findAllByText(/r\//);
    expect(posts.length).toEqual(2);

    const searchBar = screen.getByPlaceholderText(/search reddit/i);
    userEvent.type(searchBar, 'russia');
    const russiaPost = screen.getByText('Russia is scary');
    expect(russiaPost).toBeInTheDocument();

    const homeButton = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeButton);
    const loadingTextHot = await screen.findByText(/loading posts/i);
    expect(loadingTextHot).toBeInTheDocument();
    const hotPost = await screen.findByText(/anon is a rapist ukraine/i);
    expect(hotPost).toBeInTheDocument();

    const hotCategory = screen.getByRole('button', { name: /hot/i });
    expect(hotCategory).toHaveStyle('background-color: lightgray');
  });

  test('filters hot posts case-insensitive with input from search bar', async () => {
    render(<HomePageContainer />);

    const posts = await screen.findAllByText(/r\//);
    expect(posts.length).toEqual(2);

    const searchBar = screen.getByPlaceholderText(/search reddit/i);
    userEvent.type(searchBar, 'Ukraine');

    const anonPost = screen.getByText('Anon is a rapist ukraine');
    expect(anonPost).toBeInTheDocument();

    const filteredPost = screen.queryByText('2.6 First Banners Via Lumie');
    expect(filteredPost).not.toBeInTheDocument();
  });

  test('filters new posts case-insensitive with input from search bar', async () => {
    
    render(<HomePageContainer />);

    const newButton = screen.getByRole('button', { name: /new/i });
    userEvent.click(newButton);

    const posts = await screen.findAllByText(/r\//);
    expect(posts.length).toEqual(2);

    const searchBar = screen.getByPlaceholderText(/search reddit/i);
    userEvent.type(searchBar, 'russia');

    const russiaPost = screen.getByText('Russia is scary');
    expect(russiaPost).toBeInTheDocument();

    const filteredPost = screen.queryByText('meirl');
    expect(filteredPost).not.toBeInTheDocument();
  });

  test('returns top posts when category filters are clicked', async () => {
    render(<HomePageContainer />);

    const topButton = screen.getByRole('button', { name: /new/i });
    userEvent.click(topButton);
    const loadingText = await screen.findByText(/loading posts/i);
    expect(loadingText).toBeInTheDocument();
  });

});
