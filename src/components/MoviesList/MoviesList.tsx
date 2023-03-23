import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  visibleMovies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies, visibleMovies }) => (
  <div className="movies">
    {visibleMovies ? visibleMovies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    )) : movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
