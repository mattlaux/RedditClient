import React from 'react';
import PropTypes from 'prop-types';
import { timeElapsed } from '../../functions/timeElapsed';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../features/comments/commentsSlice';
import { useLocation } from 'react-router-dom';

/*
Creates one Reddit post. Data received from postsList component via prop
*/

function Post({ postData }) {
  const location = useLocation();
  const dispatch = useDispatch();

  // Begin fetch process for comments from Reddit API while detail view of post renders
  const handleClickPost = () => {
    dispatch(fetchComments(postData.permalink));
  };

  return (
    <article>
      <p>{postData.ups}</p>
      <p>{postData.subreddit_name_prefixed}</p>
      <p>
        Posted by {postData.name} {timeElapsed(postData.created_utc)}
      </p>
      {/* Render as link if on main page but render as heading if on detail view */}
      {location.pathname === '/detailView' ? (
        <h2>{postData.title}</h2>
      ) : (
        <NavLink
          to="/detailView"
          state={{ postData: postData }}
          onClick={handleClickPost}
        >
          {postData.title}
        </NavLink>
      )}
      <img src={postData.url} alt={postData.url}></img>
      <p>{postData.num_comments} comments</p>
    </article>
  );
}

Post.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default Post;
