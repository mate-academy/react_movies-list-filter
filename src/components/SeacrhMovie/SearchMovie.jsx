import React from 'react';
import PropTypes from 'prop-types';

export const SearchMovie = ({ query, handleChange }) => (
  <div className="box">
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          id="search-query"
          className="input"
          name="query"
          placeholder="Type search word"
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>
);

SearchMovie.propTypes = {
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
