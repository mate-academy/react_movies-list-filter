import React from 'react';
import PropTypes from 'prop-types';

const checkMatches = (str, sub) => {
  const pattern = new RegExp(sub, 'i');

  return pattern.test(str);
};

const SearchField = ({ query, handleOnChange, moviesFromServer }) => (
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
          onChange={(event) => {
            const { value } = event.target;

            const movies = moviesFromServer.filter(movie => (
              checkMatches(movie.title, value)
              || checkMatches(movie.description, value)
            ));

            handleOnChange(value, movies);
          }}
        />
      </div>
    </div>
  </div>
);

export { SearchField };

SearchField.propTypes = {
  query: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  moviesFromServer: PropTypes.arrayOf(PropTypes.object).isRequired,
};
