import React from 'react';
import { changeSortCategory, removePosts, addPosts, sortPostsAsync, selectSortCategory } from './sortPostsSlice';
import { useSelector, useDispatch } from 'react-redux';


function SortPosts() {
  const sortCategory = useSelector(selectSortCategory);
  const dispatch = useDispatch();

  const onClickHot = () => {
    dispatch(changeSortCategory('hot'));
    const posts = dispatch(sortPostsAsync('hot'));
    dispatch(removePosts);
    dispatch(addPosts(posts));
  };

  const onClickNew = () => {
    dispatch(changeSortCategory('new'));
    const posts = dispatch(sortPostsAsync('new'));
    dispatch(removePosts);
    dispatch(addPosts(posts));
  };

  const onClickTop = () => {
    dispatch(changeSortCategory('top')); 
    const posts = dispatch(sortPostsAsync('top'));
    dispatch(removePosts);
    dispatch(addPosts(posts));
  };
  
  return (
    <section className='sortPosts'>
      <button onClick={onClickHot} style={{ 'backgroundColor': sortCategory==='hot' ? 'lightgray' : 'transparent'}}>Hot</button>
      <button onClick={onClickNew} style={{ 'backgroundColor': sortCategory==='new' ? 'lightgray' : 'transparent'}}>New</button>
      <button onClick={onClickTop} style={{ 'backgroundColor': sortCategory==='top' ? 'lightgray' : 'transparent'}}>Top</button>
    </section>
  );
}

export default SortPosts;