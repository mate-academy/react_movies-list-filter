import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ search, searchMovie }) => (
  <>
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        name="search"
        value={search}
        onChange={searchMovie}
      />
    </div>
  </>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  searchMovie: PropTypes.func.isRequired,
};
