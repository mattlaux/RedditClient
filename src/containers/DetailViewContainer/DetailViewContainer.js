import React from 'react';
import Post from '../../components/post/post';
import CommentList from '../../components/commentList/commentList';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function DetailViewContainer() {
  let location = useLocation();
  const { postData } = location.state;

  return(
    <div>
      <NavLink to='/'>Return Home</NavLink>
      <Post postData={postData}/>
      <CommentList />
    </div>
  );
};

export default DetailViewContainer;
