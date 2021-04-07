import React from 'react';
import propTypes from 'prop-types';

export const Search = ({ query, handleChange }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        value={query}
        onChange={handleChange}
        placeholder="Type search word"
      />
    </div>
  </div>
);

Search.propTypes = {
  query: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
