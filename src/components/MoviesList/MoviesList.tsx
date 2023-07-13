import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../../types/Movie/Movie';

interface Props {
  movies: MovieType[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
