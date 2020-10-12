import React from 'react';
import PropTypes from 'prop-types';

export const SearchField = ({ query, filtering }) => (
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
          onChange={filtering}
        />
      </div>
    </div>
  </div>
);

SearchField.propTypes = {
  query: PropTypes.string.isRequired,
  filtering: PropTypes.func.isRequired,
};
