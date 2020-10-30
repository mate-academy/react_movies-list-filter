import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ query, moviesFilter }) => (
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
        onChange={moviesFilter}
      />
    </div>
  </div>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  moviesFilter: PropTypes.func.isRequired,
};
