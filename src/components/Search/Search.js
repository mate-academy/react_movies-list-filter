import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ query, getQuery }) => (
  <div className="box">
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          value={query}
          id="search-query"
          className="input"
          placeholder="Type search word"
          onChange={getQuery}
        />
      </div>
    </div>
  </div>
);

Search.propTypes = {
  getQuery: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
  query: PropTypes.string.isRequired,
};

Search.defaultProps = {
  getQuery: PropTypes.arrayOf(
    PropTypes.shape({
      description: '',
    }),
  ),
};
