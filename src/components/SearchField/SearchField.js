import React from 'react';
import PropTypes from 'prop-types';

export const SearchField = ({ query, saveQuery }) => (
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
        value={query}
        onChange={(e) => {
          saveQuery(e.target.value);
        }}
      />
    </div>
  </div>
);

SearchField.propTypes = {
  query: PropTypes.string.isRequired,
  saveQuery: PropTypes.func.isRequired,
};
