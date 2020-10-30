import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ query, search }) => (
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
        onChange={search}
      />
    </div>
  </div>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};
