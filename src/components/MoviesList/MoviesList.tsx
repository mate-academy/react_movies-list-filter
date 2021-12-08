import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = React.memo(
  ({ movies }) => (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  ),
);
