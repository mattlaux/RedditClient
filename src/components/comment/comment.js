import React from 'react';
import PropTypes from 'prop-types';
import { timeElapsed } from '../../functions/timeElapsed';

/*
Singular comment component. commentData received from commentList component via prop
*/

function Comment({ commentData }) {
  return (
    <aside className="commentBlock">
      <p className="commentAuthor">
        Posted by:{' '}
        {commentData.author
          ? commentData.author
          : 'Comment author failed to load'}
        <span>
          {commentData.created_utc
            ? timeElapsed(commentData.created_utc)
            : 'Comment post time failed to load'}
        </span>
      </p>
      <p className="commentBody">
        {commentData.body ? commentData.body : 'Comment body failed to load'}
      </p>
      <p className="commentUpvotes">
        Upvotes: {commentData.ups ? commentData.ups : 'Error'}
      </p>
    </aside>
  );
}

Comment.propTypes = {
  commentData: PropTypes.object.isRequired,
};

export default Comment;
