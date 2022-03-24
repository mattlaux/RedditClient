import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCommentFetchStatus,
  selectComments,
} from '../../features/comments/commentsSlice';
import Comment from '../comment/comment';
import { fetchComments } from '../../features/comments/commentsSlice';
import PropTypes from 'prop-types';

/*
Renders list of all comments once comments have been successfully received
from Reddit API. Returns status if comments have not been successfully received.
*/
function CommentList({ postDataPermalink }) {
  const status = useSelector(selectCommentFetchStatus);
  const comments = useSelector(selectComments);
  const [commentsContent, setCommentsContent] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(postDataPermalink));
  }, []);

  useEffect(() => {
    if (status === 'succeeded' && comments.length > 0) {
      const commentsContent = comments.map((comment) => (
        <Comment key={comment.data.id} commentData={comment.data} />
      ));
      setCommentsContent(commentsContent);
    } else {
      setCommentsContent(status);
    }
  }, [status]);

  return <div>{commentsContent}</div>;
}

CommentList.propTypes = {
  postDataPermalink: PropTypes.string.isRequired,
};

export default CommentList;
