import React from 'react';
import NavBar from '../../components/navBar/navBar';
import SortPosts from '../../components/sortPosts/sortPosts';
import PostsList from '../../components/postList/postList';

/*
Main page of application
*/

function HomePageContainer() {
  return (
    <div>
      <NavBar />
      <SortPosts />
      <PostsList />
    </div>
  );
}

export default HomePageContainer;
