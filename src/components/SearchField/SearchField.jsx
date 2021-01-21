import React from 'react';
import PropTypes from 'prop-types';

export const SearchField = ({ query, target }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>
    <div className="control">
      <input
        onChange={(e) => {
          target(e.target.value);
        }}
        value={query}
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
      />
    </div>
  </div>
);

SearchField.propTypes = {
  target: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
