import React from 'react';
import PropTypes from 'prop-types';

export const SearchField = ({ label, name, value, onChange }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      { label }
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

SearchField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SearchField.defaultProps = {
  label: 'Search',
};
