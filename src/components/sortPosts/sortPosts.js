import React from 'react';
import {
  changeSortCategory,
  fetchPosts,
  selectSortCategory,
} from '../../features/posts/postsSlice';
import { useSelector, useDispatch } from 'react-redux';

/*
Menu under navigation bar used to select posts retrieved from Reddit API
3 categories to sort by: hot, new, and top
*/

function SortPosts() {
  const sortCategory = useSelector(selectSortCategory);
  const dispatch = useDispatch();

  const onClickHot = () => {
    dispatch(changeSortCategory('hot'));
    dispatch(fetchPosts('hot'));
  };

  const onClickNew = () => {
    dispatch(changeSortCategory('new'));
    dispatch(fetchPosts('new'));
  };

  const onClickTop = () => {
    dispatch(changeSortCategory('top'));
    dispatch(fetchPosts('top'));
  };

  return (
    <section className="sortPosts">
      <button
        onClick={onClickHot}
        style={{
          borderBottom: sortCategory === 'hot' ? '3px solid lightblue' : 'transparent',
        }}
      >
        Hot
      </button>
      <button
        onClick={onClickNew}
        style={{
          borderBottom: sortCategory === 'new' ? '3px solid lightblue' : 'transparent',
        }}
      >
        New
      </button>
      <button
        onClick={onClickTop}
        style={{
          borderBottom: sortCategory === 'top' ? '3px solid lightblue' : 'transparent',
        }}
      >
        Top
      </button>
    </section>
  );
}

export default SortPosts;
