import React from 'react';
import { changeSortCategory, removePosts, fetchPosts, selectSortCategory } from '../../features/posts/postsSlice';
import { useSelector, useDispatch } from 'react-redux';


function SortPosts() {
  const sortCategory = useSelector(selectSortCategory);
  const dispatch = useDispatch();

  const onClickHot = () => {
    dispatch(changeSortCategory('hot'));
    dispatch(removePosts);
    dispatch(fetchPosts('hot'));
  };

  const onClickNew = () => {
    dispatch(changeSortCategory('new'));
    dispatch(removePosts);
    dispatch(fetchPosts('new'));
  };

  const onClickTop = () => {
    dispatch(changeSortCategory('top')); 
    dispatch(removePosts);
    dispatch(fetchPosts('top'));
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