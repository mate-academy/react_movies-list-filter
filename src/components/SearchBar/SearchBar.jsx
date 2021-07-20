import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ makeSearchParam, query }) => (
  <div className="box">
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
          onChange={makeSearchParam}
        />
      </div>
    </div>
  </div>
);

SearchBar.propTypes = {
  makeSearchParam: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
