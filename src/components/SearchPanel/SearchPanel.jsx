import React from 'react';
import PropTypes from 'prop-types';

export const SearchPanel = ({ query, handler }) => (
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
          onChange={handler}
        />
      </div>
    </div>
  </div>
);

SearchPanel.propTypes = {
  query: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
