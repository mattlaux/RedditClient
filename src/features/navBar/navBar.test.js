import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

describe('<NavBar />', () => {

  test('logo renders', () => {
    render(
      <Router>
        <Routes>
          <Route path='*' element={<NavBar />} />
        </Routes>
      </Router>
    );
    const logo = screen.getByRole('img', {name: /reddit logo/i});
    const redditTitle = screen.getByRole('heading', { name: /reddit/i});
    
    expect(logo).toBeInTheDocument();
    expect(redditTitle).toBeInTheDocument();
  });

  test('home is a functioning link', () => {
    render(
      <Router>
        <Routes>
          <Route path='*' element={<NavBar />} />
        </Routes>
      </Router>
    );
    const homeButton = screen.getByRole('link', { name: /home/i});

    expect(homeButton).toBeInTheDocument();
  });

  test('search Reddit bar initializes with placeholder Search Reddit and accepts typed input', () => {
    render(
      <Router>
        <Routes>
          <Route path='*' element={<NavBar />} />
        </Routes>
      </Router>
    );
    const searchBar = screen.getByPlaceholderText(/search reddit/i);

    expect(searchBar).toBeInTheDocument();
    userEvent.click(searchBar);
    userEvent.type(searchBar, 'Test input for reddit search bar');
    expect(searchBar).toHaveValue('Test input for reddit search bar');
  });

});