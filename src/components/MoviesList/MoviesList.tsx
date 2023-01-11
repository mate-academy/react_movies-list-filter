import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  value: string;
}

export const MoviesList: React.FC<Props> = ({ movies, value }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} value={value} />
    ))}
  </div>
);
