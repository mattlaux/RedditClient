import React from 'react';
// import own custom render function rather than RTL's render
import { renderProviderAndRouter as render, screen } from '../../test-utils/testing-library-utils';
import PostList from './postList';
import { rest } from 'msw';
import { server } from '../../mocks/server';

describe('<PostList />', () => {
  
  test('renders hot posts as default on initial page load', async () => {

    render(<PostList />);

    const firstPostTitle = await screen.findByRole('link', { name: /anon is a rapist/i });
    expect(firstPostTitle).toBeInTheDocument();

    const secondPostTitle = await screen.findByRole('link', { name: /2.6 First Banners Via Lumie/i });
    expect(secondPostTitle).toBeInTheDocument();
  });

  test('handles error for retrieving posts route', async () => {
    server.resetHandlers(
      rest.get('https://www.reddit.com/hot.json', (req, res, ctx) =>
        res(ctx.status(500))
      )
    );
    
    render(<PostList />);

    const failureMessage = await screen.findByText(/failed to retrieve posts/i);
    expect(failureMessage).toBeInTheDocument();
  });

});

