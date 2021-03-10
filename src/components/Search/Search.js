import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ query, setQuery }) => (
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
          onChange={event => setQuery(event.target.value)}
          placeholder="Type search word"
        />
      </div>
    </div>
  </div>

);

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

Search.defaultProps = {
  query: '',
};
