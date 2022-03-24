import React from 'react';
import Post from '../../components/post/post';
import CommentList from '../../components/commentList/commentList';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

/*
Renders detailed view of post after title is clicked from main page.
postData passed in from post component using location hook
*/

function DetailViewContainer() {
  let location = useLocation();
  const { postData } = location.state;

  return (
    <div className="detailView">
      <div className="detailViewHeader">
        <NavLink to="/" className="homeLink">
          <FontAwesomeIcon icon={solid('arrow-left')} />
        </NavLink>
        <h2 className="subredditHeader">{postData.subreddit_name_prefixed}</h2>
      </div>
      <Post postData={postData} />
      <CommentList postDataPermalink={postData.permalink} />
    </div>
  );
}

export default DetailViewContainer;
