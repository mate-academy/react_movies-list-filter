import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchMovie, query }) => (

  <div className="movies">
    {movies.map(movie => (
      searchMovie(movie, query) && <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
  query: PropTypes.string,
  searchMovie: PropTypes.func.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
  query: '',
};
