import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import React from 'react';

interface Props {
  movies: Movie[];
  filter: string;
}

export const MoviesList: React.FC<Props> = ({ movies, filter }) => (
  <div className="movies">
    {movies
      .filter(({ description, title }) => {
        return (
          title.toLowerCase().includes(filter.toLowerCase()) ||
          description.toLowerCase().includes(filter.toLowerCase())
        );
      })
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);
