import React from 'react';
import PropTypes from 'prop-types';

export const MovieFilter = ({ query, handleChange }) => (
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
          placeholder="Type search word"
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>
);

MovieFilter.propTypes = {
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
