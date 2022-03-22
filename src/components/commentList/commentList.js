import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCommentFetchStatus,
  selectComments,
} from '../../features/comments/commentsSlice';
import Comment from '../comment/comment';

/*
Renders list of all comments once comments have been successfully received
from Reddit API. Returns status if comments have not been successfully received.
*/
function CommentList() {
  const status = useSelector(selectCommentFetchStatus);
  const comments = useSelector(selectComments);
  const [commentsContent, setCommentsContent] = useState([]);

  useEffect(() => {
    if (status === 'succeeded') {
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

export default CommentList;
