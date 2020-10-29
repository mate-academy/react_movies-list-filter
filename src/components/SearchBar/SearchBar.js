import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = (props) => {
  const { query, filterMoviesList } = props;

  return (
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
          onChange={filterMoviesList}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  filterMoviesList: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
