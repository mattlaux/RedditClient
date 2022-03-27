import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { timeElapsed } from '../../functions/timeElapsed';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

/*
Creates one Reddit post. Data received from postsList component via prop
*/

function Post({ postData }) {
  const location = useLocation();
  const [postImage, setPostImage] = useState(null);
  const [postVideo, setPostVideo] = useState(null);
  const [articleURL, setArticleURL] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [embed, setEmbed] = useState(null);
  const mediaFiles = ['.gif', '.mp4', '.mov', '.jpg', '.png'];

  // Determines type of media to render based on entries on postData object received from API
  // TODO: improve video player
  useEffect(() => {
    // check if post url includes an image file type
    mediaFiles.some((fileType) => {
      if (postData.url.includes(fileType)) {
        setPostImage(postData.url);
        // Following two lines required or certain posts will have duplicate images
        setArticleURL(null);
        setThumbnail(null);
      }
    });
    // if post media is not an image/gif this block will test for video and embedded articles
    if (postImage === null) {
      // checks if post has video included and retrieves video file if so
      if (postData.media) {
        if (postData.media.reddit_video) {
          setPostVideo(postData.media.reddit_video.scrubber_media_url);
        } else if (postData.media.oembed) {
          setEmbed(postData.media.oembed.thumbnail_url);
        }
        // checks if post is an article linked to an outside source
        // posts that are outside articles will not have the string 'redd' in their url
      } else if (postData.url.indexOf('redd') === -1) {
        setArticleURL(postData.url);
        if (postData.thumbnail && postData.thumbnail !== 'default')
          setThumbnail(postData.thumbnail);
      }
    }
  });

  return (
    <div className="post">
      <article className="postContent">
        <div className="subredditName">
          {/* Render subreddit name if on main page. Do not render if on detailView */}
          {location.pathname !== '/detailView' && (
            <p>
              {postData.subreddit_name_prefixed
                ? postData.subreddit_name_prefixed + ' '
                : 'Post subreddit failed to load'}
            </p>
          )}
        </div>
        <div className="postAuthor">
          <p>
            <span>
              Posted by{' '}
              {postData.author ? postData.author : 'Post author failed to load'}
              {' '}
            </span>
            <span>
              {postData.created_utc
                ? timeElapsed(postData.created_utc)
                : 'Post time failed to load'}
            </span>
          </p>
        </div>
        {/* Render as link if on main page but render as heading if on detail view */}
        <div className="postTitle">
          {/* State in NavLink below used to pass postData to detail view page */}
          {location.pathname === '/detailView' ? (
            <h2>
              {postData.title ? postData.title : 'Post title failed to load'}
            </h2>
          ) : (
            <NavLink to="/detailView" state={{ postData: postData }}>
              {postData.title ? postData.title : 'Post title failed to load'}
            </NavLink>
          )}
        </div>
        {/* Post body renders here based on states set during the useEffect above */}
        <div>
          {postData.selftext && (
            <p className="postSelfText">
              {postData.selftext.substring(0, 500)}...
            </p>
          )}
          <figure className="postMedia">
            {postImage && (
              <img src={postImage} alt={postImage} className="postImg"></img>
            )}
            {postVideo && (
              <video
                src={postVideo}
                autoPlay
                muted
                className="postVideo"
                data-testid="postVideo"
              ></video>
            )}
            {embed && <img src={embed} alt={embed} className="postVideo"></img>}
            {thumbnail && (
              <a href={articleURL} target="_blank" rel="noreferrer">
                <img
                  src={thumbnail}
                  alt={articleURL}
                  className="postThumbnail"
                ></img>
              </a>
            )}
            {!thumbnail && articleURL && (
              <p>
                <a href={articleURL} target="_blank" rel="noreferrer">
                  Click here to View Article
                </a>
              </p>
            )}
          </figure>
        </div>
        <div className='cardBottomRow'>
          <section className="postUpvotes">
            <FontAwesomeIcon icon={solid('arrow-up')} className="upArrow" />
            <p>{postData.ups ? postData.ups : 'Error'}</p>
            <FontAwesomeIcon icon={solid('arrow-down')} className="downArrow" />
          </section>
          {location.pathname === '/detailView' ? (
            <p className="numComments">
              {postData.num_comments
                ? postData.num_comments
                : 'Number of comments failed to load'}{' '}
            comments
            </p>
          ) : (
            <NavLink to="/detailView" state={{ postData: postData }}>
              <p className="numComments">
                {postData.num_comments
                  ? postData.num_comments
                  : '0'}{' '}
              comments
              </p>
            </NavLink>
          )}
        </div>
      </article>
      <hr className="postDivider"></hr>
    </div>
  );
}

Post.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default Post;
