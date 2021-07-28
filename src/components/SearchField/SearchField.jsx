import React from "react";
import PropTypes from 'prop-types';

export const SearchField = ({query, handleFilterChange}) => (
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
          onChange={handleFilterChange}
          value={query}
        />
      </div>
    </div>
  </div>
)

SearchField.proppTypes = {
  query: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
}
