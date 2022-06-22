import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map(movie => (
        <li>
          <MovieCard
            key={movie.imdbId}
            movie={movie}
          />
        </li>
      ))}
    </ul>
  );
};
