import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../comment/comment';
import { fetchComments } from '../../features/comments/commentsSlice';
import PropTypes from 'prop-types';
import logo from '../../media/reddit-logo.png';

/*
Renders list of all comments once comments have been successfully received
from Reddit API. Returns commentFetchStatus if comments have not been successfully received.
*/
function CommentList({ postDataPermalink }) {
  const commentsState = useSelector((state) => state.comments);
  const { commentFetchStatus, comments } = commentsState;
  const [commentsContent, setCommentsContent] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(postDataPermalink));
  }, []);

  useEffect(() => {
    if (commentFetchStatus === 'succeeded' && comments.length > 0) {
      const commentsContent = comments.map((comment) => (
        <Comment key={comment.data.id} commentData={comment.data} />
      ));
      setCommentsContent(commentsContent);
    } else {
      setCommentsContent(commentFetchStatus);
    }
  }, [commentFetchStatus]);

  return commentFetchStatus === 'loading comments' ? (
    <div className='loadingComments'>
      <img src={logo} alt='Animated Reddit Logo'></img>
    </div>
  ) : (
    <div>{commentsContent}</div>
  );
}

CommentList.propTypes = {
  postDataPermalink: PropTypes.string.isRequired,
};

export default CommentList;
