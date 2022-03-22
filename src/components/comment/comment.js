import React from 'react';
import PropTypes from 'prop-types';
import { timeElapsed } from '../../functions/timeElapsed';

/*
Singular comment component. commentData received from commentList component via prop
*/

function Comment({ commentData }) {
  return (
    <aside>
      <p>{commentData.author ? commentData.author : 'Comment author failed to load'}</p>
      <p>{commentData.created_utc ? timeElapsed(commentData.created_utc) : 'Comment post time failed to load'}</p>
      <p>{commentData.body ? commentData.body : 'Comment body failed to load'}</p>
      <p>{commentData.ups ? commentData.ups : 'Error'}</p>
    </aside>
  );
}

Comment.propTypes = {
  commentData: PropTypes.object.isRequired,
};

export default Comment;
