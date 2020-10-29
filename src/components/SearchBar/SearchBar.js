import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ value, clickHandler }) => (
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
          value={value}
          placeholder="Type search word"
          onChange={clickHandler}
        />
      </div>
    </div>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
