import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[] | null;
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies &&
      movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </div>
);
