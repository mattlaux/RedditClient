import React from 'react';
import PropTypes from 'prop-types';


function Post({ postData }) {
  
  const timeElapsed = (postTimeEpoch) => {
    let postDate = new Date(0);
    postDate.setUTCSeconds(postTimeEpoch);
    let currentDate = new Date();
    let timeElapsed = Math.ceil((currentDate - postDate)/(1000*60*60));

    if (timeElapsed < 24) {
      return `${timeElapsed} hours ago`;
    } else if (timeElapsed >= 24 && timeElapsed < 48) {
      return '1 day ago';
    } else {
      timeElapsed = Math.floor(timeElapsed/24);
      return `${timeElapsed} days ago`; 
    }
  };  

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