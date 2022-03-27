import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../features/posts/postsSlice';
import Post from '../post/post';
import logo from '../../media/reddit-logo.png';

/*
Renders all posts if successfully received from Reddit API.
Renders status if API fetch is unsuccessful.
Filters shown posts by input in search bar.
*/

function PostList() {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);
  const { posts, postsFetchStatus, searchContent } = postsState;
  const [postsContent, setPostsContent] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts('hot'));
  }, []);

  useEffect(() => {
    if (postsFetchStatus === 'succeeded' && posts.length > 0) {
      const postsContent = posts.map((post) => (
        <Post key={post.data.id} postData={post.data} />
      ));
      setPostsContent(postsContent);
    } else {
      setPostsContent(postsFetchStatus);
    }
  }, [postsFetchStatus]);

  useEffect(() => {
    const filteredPosts = posts.filter((post) =>
      post.data.title.toLowerCase().includes(searchContent.toLowerCase())
    );
    if (filteredPosts.length > 0) {
      const filteredPostsContent = filteredPosts.map((post) => (
        <Post key={post.data.id} postData={post.data} />
      ));
      setPostsContent(filteredPostsContent);
    } else {
      const filteredPostsContent = 'No posts match your search';
      setPostsContent(filteredPostsContent);
    }
  }, [searchContent]);

  return postsFetchStatus === 'loading posts' ? (
    <div className='loadingPosts'>
      <img src={logo} alt="Animated Reddit Logo"></img>
    </div>
  ) : (
    <div className="postsList">{postsContent}</div>
  );
}

export default PostList;
