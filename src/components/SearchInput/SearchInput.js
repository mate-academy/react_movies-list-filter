import React from 'react';
import PropTypes from 'prop-types';

export const SearchInput = ({ value, onChange }) => (
  <input
    type="text"
    id="search-query"
    className="input"
    placeholder="Type search word"
    value={value}
    onChange={onChange}
  />
);

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  value: '',
};
