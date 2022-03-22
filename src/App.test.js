import React from 'react';
import { renderProvider as render, screen } from './test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {

  test('renders detailed view with comments when post title is clicked', async () => {
    render(<App />);

    // Start at home page and then click post title that routes to detail view
    const postTitle = await screen.findByText('Anon is a rapist ukraine');
    expect(postTitle).toBeInTheDocument();
    userEvent.click(postTitle);

    // Render post information in detail view format
    const homeLink = await screen.findByRole('link', { name: /home/i });
    const subreddit = screen.getByRole('heading', { name: /r\/greentext/i });
    const title = screen.getByText(/anon is a rapist ukraine/i);

    expect(homeLink).toBeInTheDocument();
    expect(subreddit).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    
    // Render all comments. Comments to side indicate data property name returned by Reddit API
    const firstCommentBody = await screen.findByText(/Do you need consent to go fuck yourself?/i); // body
    const firstCommentUser = screen.getByText('thelivinlegend'); // author
    const firstCommentUpvotes = screen.getByText('84'); // ups
    const lastCommentBody = screen.getByText('You touched her model penis, later virgins'); // body
    const lastCommentUser = screen.getByText('OhSnap404'); // author
    const lastCommentUpvotes = screen.getByText('83'); // ups
    const numComments = screen.getAllByText(/ago/i);

    expect(firstCommentBody).toBeInTheDocument();
    expect(firstCommentUser).toBeInTheDocument();
    expect(firstCommentUpvotes).toBeInTheDocument();
    expect(lastCommentBody).toBeInTheDocument();
    expect(lastCommentUser).toBeInTheDocument();
    expect(lastCommentUpvotes).toBeInTheDocument();
    expect(numComments.length).toBe(14);

    // Return home to main screen
    userEvent.click(homeLink);
    const secondPost = await screen.findByText('2.6 First Banners Via Lumie');
    expect(secondPost).toBeInTheDocument();
  });

});

