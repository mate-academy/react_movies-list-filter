import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ filteredMovies }) => (
  <div className="movies">
    {filteredMovies.map(movie => (
      movie
        ? <MovieCard key={movie.imdbId} {...movie} />
        : ''
    ))}
  </div>
);

MoviesList.propTypes = {
  filteredMovies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
  search: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  filteredMovies: [],
};
