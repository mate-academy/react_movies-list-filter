import React from 'react';
import PropTypes from 'prop-types';

export const SearchField = ({ value, inputChangeHandler }) => (
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
          onChange={inputChangeHandler}
          value={value}
        />
      </div>
    </div>
  </div>
);

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
};
