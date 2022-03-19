import React from 'react';
import { NavLink } from 'react-router-dom';
import { changeSortCategory, removePosts, fetchPosts, updateSearch } from '../../features/posts/postsSlice';
import { useDispatch } from 'react-redux';

function NavBar() {
  const dispatch = useDispatch();

  const handleClickHome = () => {
    dispatch(changeSortCategory('hot'));
    dispatch(removePosts);
    dispatch(fetchPosts('hot'));
  };

  const handleSearchChange = (e) => {
    dispatch(updateSearch(e.target.value));
  };
  
  return(
    <header>
      <img src='../../media/reddit-logo.png' alt='Reddit Logo'></img>
      <h1>Mock Reddit</h1>
      <nav>
        <NavLink to='/' onClick={handleClickHome}>Home</NavLink>
      </nav>
      <form>
        <input 
          type='search' 
          id='search' 
          name='search' 
          placeholder='Search Reddit' 
          maxLength={50}
          onChange={handleSearchChange} >
        </input>
      </form>
    </header>
  );
}

export default NavBar;