import React from 'react';
import Post from '../../components/post/post';
import CommentList from '../../components/commentList/commentList';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

/*
Renders detailed view of post after title is clicked from main page.
postData passed in from post component using location hook
*/

function DetailViewContainer() {
  let location = useLocation();
  const { postData } = location.state;

  return (
    <div>
      <NavLink to="/">Return Home</NavLink>
      <h2>{postData.subreddit_name_prefixed}</h2>
      <Post postData={postData} />
      <CommentList />
    </div>
  );
}

export default DetailViewContainer;
