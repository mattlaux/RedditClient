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

  const handleClick = (category) => {
    dispatch(changeSortCategory(category));
    dispatch(fetchPosts(category));
  };

  return (
    <section className="sortPosts">
      <button
        onClick={() => handleClick('hot')}
        style={{
          borderBottom:
            sortCategory === 'hot' ? '3px solid lightblue' : 'transparent',
        }}
      >
        Hot
      </button>
      <button
        onClick={() => handleClick('new')}
        style={{
          borderBottom:
            sortCategory === 'new' ? '3px solid lightblue' : 'transparent',
        }}
      >
        New
      </button>
      <button
        onClick={() => handleClick('top')}
        style={{
          borderBottom:
            sortCategory === 'top' ? '3px solid lightblue' : 'transparent',
        }}
      >
        Top
      </button>
    </section>
  );
}

export default SortPosts;
