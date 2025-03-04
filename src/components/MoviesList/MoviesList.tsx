import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  visibleMovies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ visibleMovies }) => (
  <div className="movies">
    {visibleMovies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
