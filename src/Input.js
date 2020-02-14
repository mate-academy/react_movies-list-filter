import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

const Input = ({ getQuery, query }) => (
  <div className="control">
    <DebounceInput
      debounceTimeout={500}
      value={query}
      onChange={getQuery}
      type="search"
      id="search-query"
      className="input"
      placeholder="Type search word"
    />
  </div>
);

Input.propTypes = {
  getQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Input;
