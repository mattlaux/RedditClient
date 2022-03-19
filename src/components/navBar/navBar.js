import React from 'react';
import { NavLink } from 'react-router-dom';
import { changeSortCategory, removePosts, fetchPosts } from '../../features/posts/postsSlice';
import { useDispatch } from 'react-redux';

function NavBar() {
  const dispatch = useDispatch();

  const onClickHome = () => {
    dispatch(changeSortCategory('hot'));
    dispatch(removePosts);
    dispatch(fetchPosts('hot'));
  };
  
  return(
    <header>
      <img src='../../media/reddit-logo.png' alt='Reddit Logo'></img>
      <h1>Mock Reddit</h1>
      <nav>
        <NavLink to='/' onClick={onClickHome}>Home</NavLink>
      </nav>
      <form>
        <input type='search' id='search' name='search' placeholder='Search Reddit' maxLength={50} ></input>
      </form>
    </header>
  );
}

export default NavBar;