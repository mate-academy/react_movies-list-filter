import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ query, onChange }) => (
  <input
    type="text"
    id="search-query"
    className="input"
    placeholder="Type search word"
    value={query}
    onChange={(event) => {
      onChange(event.target.value);
    }}
  />
);

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
