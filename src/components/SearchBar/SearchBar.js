import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ onInputChange }) => {
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
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
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
