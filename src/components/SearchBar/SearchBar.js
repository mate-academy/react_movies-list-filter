import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ value, changeQuery }) => (
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
          onChange={changeQuery}
        />
      </div>
    </div>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  changeQuery: PropTypes.func.isRequired,
};
