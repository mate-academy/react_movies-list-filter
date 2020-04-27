import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, highlightSearchResult }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        highlightedText={highlightSearchResult}
        key={movie.imdbId}
        {...movie}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  highlightSearchResult: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
