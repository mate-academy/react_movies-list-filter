import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MovieShape } from '../shapes/MovieShape';

export const Search = ({ update, movies }) => {
  const [query, setQuery] = useState('');

  const searchMovie = (value) => {
    setQuery(value);

    const searchedMovies = movies.filter(movie => (
      movie.title.toLowerCase().includes(value.toLowerCase())
        || movie.description.toLowerCase().includes(value.toLowerCase())
    ));

    update({
      filteredMovies: searchedMovies,
    });
  };

  return (
    <>
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          id="search-query"
          className="input"
          value={query}
          placeholder="Type search word"
          onChange={e => searchMovie(e.target.value)}
        />
      </div>
    </>
  );
};

Search.propTypes = {
  update: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(MovieShape),
};

Search.defaultProps = {
  movies: [],
};
