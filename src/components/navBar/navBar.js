import React from 'react';
import { updateSearch } from '../../features/posts/postsSlice';
import { useDispatch } from 'react-redux';
import logo from '../../media/reddit-logo.png';

/*
Navigation bar for main page of application.
Includes logo, home button, and search bar
*/

function NavBar() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  return (
    <header className="header">
      <figure>
        <img src={logo} alt="Reddit Logo"></img>
      </figure>
      <form>
        <input
          type="text"
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
