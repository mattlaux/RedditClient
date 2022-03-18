import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectStatus, fetchPosts } from '../../features/posts/postsSlice';
import Post from '../post/post';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const status = useSelector(selectStatus);
  const [postsContent, setPostsContent] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts('hot'));
  }, []);

  useEffect(() => {
    if (status==='succeeded') {
      const postsContent = posts.map((post) => (
        <Post 
          key={post.data.id}
          postData={post.data} 
        />
      ));
      setPostsContent(postsContent);
    } else {
      setPostsContent(status);
    }
  }, [status]);

  return(
    <div>
      {postsContent}
    </div>
  );
};

export default PostList;
