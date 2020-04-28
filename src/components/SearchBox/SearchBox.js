import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ handleChange }) => (
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

SearchBox.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBox;
