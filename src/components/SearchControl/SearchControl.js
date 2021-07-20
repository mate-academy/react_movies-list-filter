import React from 'react';
import PropTypes from 'prop-types';

export const SearchControl = ({ setSearchQuery, query }) => (
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
          value={query}
          placeholder="Type search word"
          onChange={setSearchQuery}
        />
      </div>
    </div>
  </div>
);

SearchControl.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
