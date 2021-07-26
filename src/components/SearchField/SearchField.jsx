import React from 'react';
import PropTypes from 'prop-types';

export const SearchField = ({ value, onChange }) => (
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
          onChange={onChange}
          placeholder="Type search word"
        />
      </div>
    </div>
  </div>
);

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
