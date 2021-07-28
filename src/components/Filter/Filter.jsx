import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ defaultValue, onChange }) => (
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
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  </div>
);

Filter.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
