import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { timeElapsed } from '../../functions/timeElapsed';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../features/comments/commentsSlice';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

/*
Creates one Reddit post. Data received from postsList component via prop
*/

function Post({ postData }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [postMedia, setPostMedia] = useState(null);
  const mediaFiles = [
    '.gif',
    '.mp4',
    '.mov',
    '.jpg',
    '.png'
  ];

  // Begin fetch process for comments from Reddit API while detail view of post renders
  const handleClickPost = () => {
    dispatch(fetchComments(postData.permalink));
  };

  useEffect(() => {
    mediaFiles.some(fileType => {
      if (postData.url.includes(fileType)) {
        setPostMedia(postData.url);
      }
    });
  }, [location]);


  return (
    <article className='post'>
      <p className='postAuthor'>
        <span className='subredditName'>{postData.subreddit_name_prefixed ? postData.subreddit_name_prefixed + ' ' : 'Post subreddit failed to load'}</span>
        <span>Posted by {postData.name ? postData.name : 'Post author failed to load'}</span>
        <span>{postData.created_utc ? timeElapsed(postData.created_utc) : 'Post time failed to load'}</span>
      </p>
      {/* Render as link if on main page but render as heading if on detail view */}
      <div className='postTitle'>
        {location.pathname === '/detailView' ? (
          <h2>{postData.title ? postData.title : 'Post title failed to load'}</h2>
        ) : (
          <NavLink
            to="/detailView"
            state={{ postData: postData }}
            onClick={handleClickPost}
          >
            {postData.title ? postData.title : 'Post title failed to load'}
          </NavLink>
        )}
      </div>
      <p>{postData.selftext}</p>
      {/*postMedia ? <img src={postMedia} alt={postMedia}></img> : 'Post picture failed to load'*/}
      {postMedia !== null && (<img src={postMedia} alt={postMedia} className='postImg'></img>)}
      <section className='postUpvotes'>
        <FontAwesomeIcon icon={solid('arrow-up')} className='upArrow' />
        <p>{postData.ups ? postData.ups : 'Error'}</p>
        <FontAwesomeIcon icon={solid('arrow-down')} className='downArrow' />
      </section>
      <p className='numComments'>{postData.num_comments ? postData.num_comments : 'Number of comments failed to load'} comments</p>
    </article>
  );
}

Post.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default Post;
