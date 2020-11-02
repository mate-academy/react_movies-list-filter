import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesList }) => (
  <div className="movies">
    {
      moviesList.map(movie => (
        moviesList && <MovieCard key={movie.imdbId} {...movie} />
      ))
    }
  </div>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  moviesList: [],
};
