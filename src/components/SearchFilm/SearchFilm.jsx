import React from 'react';
import PropTypes from 'prop-types';

export const SearchFilm = ({ value, handler }) => (
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
          value={value}
          onChange={handler}
        />
      </div>
    </div>
  </div>
);

SearchFilm.propTypes = {
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
