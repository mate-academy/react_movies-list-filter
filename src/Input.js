import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

const Input = ({ queryChange, query }) => (
  <div className="control">
    <DebounceInput
      debounceTimeout={1000}
      value={query}
      onChange={queryChange}
      type="search"
      id="search-query"
      className="input"
      placeholder="Type search word"
    />
  </div>
);

Input.propTypes = {
  queryChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Input;
