import React, { memo } from 'react';
import { typesForMoviesList } from '../../types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = memo(
  ({ movies }) => (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
    </div>
  ),
);

MoviesList.propTypes = {
  movies: typesForMoviesList,
};

MoviesList.defaultProps = {
  movies: [],
};
