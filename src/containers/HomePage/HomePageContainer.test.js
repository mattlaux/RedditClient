import React from 'react';
import {
  renderProviderAndRouter as render,
  screen,
} from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import HomePageContainer from './HomePageContainer';

describe('<HomePageContainer />', () => {
  test('returns to main page with hot post loaded when Home link is clicked', async () => {
    render(<HomePageContainer />);

    // Retrieve and load new posts
    const newButton = screen.getByRole('button', { name: /new/i });
    userEvent.click(newButton);
    const loadingTextNew = await screen.findByText(/loading posts/i);
    expect(loadingTextNew).toBeInTheDocument();
    const posts = await screen.findAllByText(/r\//);
    expect(posts.length).toEqual(2);

    // Filter new posts by search bar input
    const searchBar = screen.getByPlaceholderText(/search reddit/i);
    userEvent.type(searchBar, 'russia');
    const russiaPost = screen.getByText('Russia is scary');
    expect(russiaPost).toBeInTheDocument();

    // Navigate back to main page where posts from hot should be loaded
    const hotButton = screen.getByRole('button', { name: /hot/i });
    userEvent.click(hotButton);
    const loadingTextHot = await screen.findByText(/loading posts/i);
    expect(loadingTextHot).toBeInTheDocument();
    const hotPost = await screen.findByText(/anon is a rapist ukraine/i);
    expect(hotPost).toBeInTheDocument();

    const hotCategory = screen.getByRole('button', { name: /hot/i });
    expect(hotCategory).toHaveStyle('border-bottom: 3px solid lightblue');
  });

  test('filters hot posts case-insensitive with input from search bar', async () => {
    render(<HomePageContainer />);

    const posts = await screen.findAllByText(/r\//);
    const searchBar = screen.getByPlaceholderText(/search reddit/i);
    const anonPost = screen.getByText('Anon is a rapist ukraine');
    const filteredPost = screen.queryByText('2.6 First Banners Via Lumie');

    expect(posts.length).toEqual(2);
    userEvent.type(searchBar, 'Ukraine');
    expect(anonPost).toBeInTheDocument();
    expect(filteredPost).not.toBeInTheDocument();
  });

  test('displays no match message if search bar input has no matches', async () => {
    render(<HomePageContainer />);

    const posts = await screen.findAllByText(/r\//);
    const searchBar = screen.getByPlaceholderText(/search reddit/i);
    let noMatchMessage = screen.queryByText(/No posts match your search/i);

    expect(noMatchMessage).not.toBeInTheDocument();
    expect(posts.length).toEqual(2);
    userEvent.type(searchBar, 'fdafdafdsa');
    noMatchMessage = screen.getByText(/No posts match your search/i);
    expect(noMatchMessage).toBeInTheDocument();
  });

  test('filters new posts case-insensitive with input from search bar', async () => {
    render(<HomePageContainer />);

    // Retrieve new posts from Reddit API
    const newButton = screen.getByRole('button', { name: /new/i });
    userEvent.click(newButton);

    const posts = await screen.findAllByText(/r\//);
    const searchBar = screen.getByPlaceholderText(/search reddit/i);
    userEvent.type(searchBar, 'russia');
    const russiaPost = screen.getByText('Russia is scary');
    const filteredPost = screen.queryByText('meirl');

    expect(posts.length).toEqual(2);
    expect(russiaPost).toBeInTheDocument();
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
