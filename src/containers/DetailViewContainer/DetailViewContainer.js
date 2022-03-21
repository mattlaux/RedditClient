import React from 'react';
import Post from '../../components/post/post';
import CommentList from '../../components/commentList/commentList';
import { useLocation } from 'react-router-dom';

function DetailViewContainer() {
  let location = useLocation();
  const { postData } = location.state;

  return(
    <div>
      <Post postData={postData}/>
      <CommentList />
    </div>
  );
};

export default DetailViewContainer;
