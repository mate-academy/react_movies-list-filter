import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ handleInput }) => (
  <div className="control">
    <input
      type="text"
      id="search-query"
      className="input"
      placeholder="Type search word"
      onChange={handleInput}
    />
  </div>
);

Search.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
