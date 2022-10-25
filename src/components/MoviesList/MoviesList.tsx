import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li className="card">
        <MovieCard key={movie.imdbId} movie={movie} />
      </li>
    ))}
  </ul>
);
