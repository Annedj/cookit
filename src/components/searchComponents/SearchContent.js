import React from 'react';
import { Hits, Stats, SortBy, Pagination } from 'react-instantsearch-dom';
import Hit from './SearchContent';

const SearchContent = () => (
  <main>
    <div className="information">
      <div className="stats">
        <Stats />
      </div>
      {/* <div className="">
        <SortBy defaultRefinement="movies" items={[{ value: 'movies', label: 'Most Relevant' }]} />
      </div> */}
    </div>
    {/* <Hits hitComponent={Hit} /> */}
    <div>
      <Pagination />
    </div>
  </main>
);

export default SearchContent;
