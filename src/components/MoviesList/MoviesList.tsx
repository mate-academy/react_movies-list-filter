import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

function isNeeded(movieInfo: string, query: string) {
  return movieInfo.toLowerCase().includes(query.toLowerCase().trim());
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => (
  <div className="movies">
    {movies.map(movie => {
      const isNeededTitle = isNeeded(movie.title, query);
      const isNeededDesc = isNeeded(movie.description, query);

      return (isNeededTitle || isNeededDesc) && (
        <MovieCard key={movie.imdbId} movie={movie} />
      );
    })}
  </div>
);
