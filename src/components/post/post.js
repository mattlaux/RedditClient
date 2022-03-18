import React from 'react';
import PropTypes from 'prop-types';
import { timeElapsed } from '../../functions/timeElapsed';

function Post({ postData }) {
  return(
    <article>
      <p>{postData.ups}</p>
      <p>{postData.subreddit_name_prefixed}</p>
      <p>Posted by {postData.name} {timeElapsed(postData.created_utc)}</p>
      <h2>{postData.title}</h2>
      <img src={postData.url} alt={postData.url}></img>
      <p>{postData.num_comments} comments</p>
    </article>
  );
}

Post.propTypes = {
  postData: PropTypes.object.isRequired
};

export default Post;