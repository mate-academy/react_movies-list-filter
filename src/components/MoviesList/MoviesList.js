import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchTerm, isHighlighted }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        {...movie}
        searchTerm={searchTerm}
        isHighlighted={isHighlighted}
      />
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
  searchTerm: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
