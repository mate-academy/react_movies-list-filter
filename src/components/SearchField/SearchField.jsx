import React from 'react';
import PropTypes from 'prop-types';

export function SearchField({ query, onChange }) {
  return (
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
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

SearchField.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
