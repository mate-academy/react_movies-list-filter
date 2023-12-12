import React from 'react';
import './MoviesList.scss';
// eslint-disable-next-line import/no-cycle
import { MovieCard } from '../MovieCard/MovieCard';

import { Movie } from '../../types';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
