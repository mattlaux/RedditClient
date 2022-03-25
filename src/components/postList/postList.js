import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPosts,
  selectPostsFetchStatus,
  fetchPosts,
  selectSearchContent,
} from '../../features/posts/postsSlice';
import Post from '../post/post';

/*
Renders all posts if successfully received from Reddit API.
Renders status if API fetch is unsuccessful.
Filters shown posts by input in search bar.
*/

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsFetchStatus);
  const searchContent = useSelector(selectSearchContent);
  const [postsContent, setPostsContent] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts('hot'));
  }, []);

  useEffect(() => {
    if (status === 'succeeded' && posts.length > 0) {
      const postsContent = posts.map((post) => (
        <Post key={post.data.id} postData={post.data} />
      ));
      setPostsContent(postsContent);
    } else {
      setPostsContent(status);
    }
  }, [status]);

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

  return <div className='postsList'>{postsContent}</div>;
}

export default PostList;
