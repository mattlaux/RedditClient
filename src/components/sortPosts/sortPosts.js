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
          backgroundColor: sortCategory === 'hot' ? 'lightgray' : 'transparent',
        }}
      >
        Hot
      </button>
      <button
        onClick={onClickNew}
        style={{
          backgroundColor: sortCategory === 'new' ? 'lightgray' : 'transparent',
        }}
      >
        New
      </button>
      <button
        onClick={onClickTop}
        style={{
          backgroundColor: sortCategory === 'top' ? 'lightgray' : 'transparent',
        }}
      >
        Top
      </button>
    </section>
  );
}

export default SortPosts;
