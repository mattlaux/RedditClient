import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  changeSortCategory,
  fetchPosts,
  updateSearch,
} from '../../features/posts/postsSlice';
import { useDispatch } from 'react-redux';

/*
Navigation bar for main page of application.
Includes logo, home button, and search bar
*/

function NavBar() {
  const dispatch = useDispatch();

  // Retrieves latest posts from Reddit hot category
  const handleClickHome = () => {
    dispatch(changeSortCategory('hot'));
    dispatch(fetchPosts('hot'));
  };

  const handleSearchChange = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  return (
    <header>
      <img src="../../media/reddit-logo.png" alt="Reddit Logo"></img>
      <h1>Mock Reddit</h1>
      <nav>
        <NavLink to="/" onClick={handleClickHome}>
          Home
        </NavLink>
      </nav>
      <form>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search Reddit"
          maxLength={50}
          onChange={handleSearchChange}
        ></input>
      </form>
    </header>
  );
}

export default NavBar;
