import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  value: string,
}

export const MoviesList: React.FC<Props> = ({ movies, value }) => {
  return (
    <div className="movies">
      {movies.filter(movie => {
        if (movie.title.toLowerCase().includes(value.toLowerCase())
          || movie.description.toLowerCase().includes(value.toLowerCase())) {
          return movie;
        }

        return '';
      }).map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
