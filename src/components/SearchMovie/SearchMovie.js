import React from 'react';
import PropTypes from 'prop-types';

export const SearchMovie = ({ query, handleSearch }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        value={query}
        onChange={handleSearch}
      />
    </div>
  </div>
);

SearchMovie.propTypes = {
  query: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
