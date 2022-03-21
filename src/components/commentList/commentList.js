import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectStatus, selectComments } from '../../features/comments/commentsSlice';
import Comment from '../comment/comment';

function CommentList() {
  const status = useSelector(selectStatus);
  const comments = useSelector(selectComments);
  const [commentsContent, setCommentsContent] = useState([]);

  useEffect(() => {
    if(status === 'succeeded') {
      const commentsContent = comments.map((comment) => (
        <Comment
          key={comment.data.id}
          commentData={comment.data}
        />
      ));
      setCommentsContent(commentsContent);
    } else {
      setCommentsContent(status);
    }
  }, [status]);
  
  return (
    <div>
      {commentsContent}
    </div>
  );
}

export default CommentList;

