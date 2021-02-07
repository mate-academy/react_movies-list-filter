import React from 'react';
import PropTypes from 'prop-types';

import './SearchMovie.scss';

export const SearchMovie = ({ query, filterMovies }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>
    <div className="control">
      <input
        type="text"
        id="search-query"
        value={query}
        className="input"
        placeholder="Type search word"
        onChange={e => (
          filterMovies(e.target.value)
        )}
      />
    </div>
  </div>
);

SearchMovie.propTypes = {
  query: PropTypes.string.isRequired,
  filterMovies: PropTypes.func.isRequired,
};
