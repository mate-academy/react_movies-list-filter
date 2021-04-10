import React from 'react';
import propTypes from 'prop-types';

export const SearchMovie = ({ query, showSearchedMovies }) => (
  <>
    <div className="box">
      <div className="field">
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control">
          <input
            value={query}
            onChange={
              showSearchedMovies
            }
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
          />
        </div>
      </div>
    </div>
  </>
);

SearchMovie.propTypes = {
  query: propTypes.string.isRequired,
  showSearchedMovies: propTypes.func.isRequired,
};
