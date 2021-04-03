import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ query, handleQuery }) => (
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
          onChange={handleQuery}
        />
      </div>
    </div>
  </div>
);

Search.propTypes = {
  query: PropTypes.string,
  handleQuery: PropTypes.func.isRequired,
};

Search.defaultProps = {
  query: '',
};
