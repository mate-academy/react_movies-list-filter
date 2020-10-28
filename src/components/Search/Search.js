import React from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

export const Search = ({ query, filterMovies }) => (
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
        onChange={event => (
          filterMovies(event.target.value)
        )}
      />
    </div>
  </div>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  filterMovies: PropTypes.func.isRequired,
};
