import React from 'react';
import PropTypes from 'prop-types';
import { timeElapsed } from '../../functions/timeElapsed';

/*
Singular comment component. commentData received from commentList component via prop
*/

function Comment({ commentData }) {
  return (
    <aside>
      <p>{commentData.author}</p>
      <p>{timeElapsed(commentData.created_utc)}</p>
      <p>{commentData.body}</p>
      <p>{commentData.ups}</p>
    </aside>
  );
}

Comment.propTypes = {
  commentData: PropTypes.object.isRequired,
};

export default Comment;
