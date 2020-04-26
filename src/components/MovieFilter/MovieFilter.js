import React from 'react';
import PropTypes from 'prop-types';
import './MovieFilter.scss';

export const MoviesFilter = ({ filter }) => (
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
          onChange={filter}
        />
      </div>
    </div>
  </div>
);

MoviesFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};
