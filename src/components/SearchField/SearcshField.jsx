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
        placeholder="Type search word"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
</div>
)

SearchField.proppTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
