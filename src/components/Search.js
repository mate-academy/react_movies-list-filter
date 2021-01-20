import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ query, updateValue }) => (
  <input
    type="text"
    id="search-query"
    className="input"
    placeholder="Type search word"
    value={query}
    onChange={event => (
      updateValue(event.target.value)
    )}
  />
);

Search.propTypes = {
  query: PropTypes.string,
  updateValue: PropTypes.func.isRequired,
};

Search.defaultProps = {
  query: '',
};
