import React from 'react';
import PropTypes from 'prop-types';

export const SearchField = ({ inputValue, handleChange }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        name="search"
        placeholder="Type search word"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  </div>
);

SearchField.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
