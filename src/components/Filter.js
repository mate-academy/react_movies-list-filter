import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ handleInput }) => (
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

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
