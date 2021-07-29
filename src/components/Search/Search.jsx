import React from 'react';
import propTypes from 'prop-types';

export const Search = ({ onChange, query }) => (
  <div className="box">
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          id="search-query"
          className="input"
          placeholder="Type search word"
        />
      </div>
    </div>
  </div>
);

Search.propTypes = {
  onChange: propTypes.func.isRequired,
  query: propTypes.string.isRequired,
};
