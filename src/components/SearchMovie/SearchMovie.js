import React from 'react';
import PropTypes from 'prop-types';

export const SearchMovie = ({ saveQuery, query }) => (
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
          onChange={event => saveQuery(event.target.value)}
        />
      </div>
    </div>
  </div>
);

SearchMovie.defaultProps = {
  query: '',
};

SearchMovie.propTypes = {
  saveQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
};
