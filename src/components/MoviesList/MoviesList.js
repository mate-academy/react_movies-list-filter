import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, state }) => {
  let filteredMovies = null;

  if (state) {
    filteredMovies = movies.filter(
      movie => movie.title.toLowerCase().includes(state.toLowerCase()),
    );

    if (!filteredMovies) {
      filteredMovies = movies.filter(
        movie => movie.description.toLowerCase().includes(state.toLowerCase()),
      );
    }
  } else {
    filteredMovies = movies;
  }

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),

  state: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
