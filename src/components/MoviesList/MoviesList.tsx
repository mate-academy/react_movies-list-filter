import React from 'react';
import { MovieCard } from '../MovieCard';
import './MovieList.scss';

interface Props {
  movies: Movie[];
}

export const MovieList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
