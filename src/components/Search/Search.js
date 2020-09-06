import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

export const Search = ({ query, filterMovies }) => (
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
          onChange={filterMovies}
        />
      </div>
    </div>
  </div>
);

Search.propTypes = {
  query: PropTypes.string,
  filterMovies: PropTypes.func.isRequired,
};

Search.defaultProps = {
  query: '',
};
