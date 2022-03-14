import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return(
    <header>
      <img src='../../media/reddit-logo.png' alt='Reddit Logo'></img>
      <h1>Mock Reddit</h1>
      <nav>
        <NavLink to='home'>Home</NavLink>
      </nav>
      <form>
        <input type='search' id='search' name='search' placeholder='Search Reddit'></input>
      </form>
    </header>
  );
}

export default NavBar;