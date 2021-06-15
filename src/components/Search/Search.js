import React from 'react';
import PropTypes from 'prop-types';

export function Search({ saveInputValue }) {
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
            onChange={event => saveInputValue(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  saveInputValue: PropTypes.func.isRequired,
};
