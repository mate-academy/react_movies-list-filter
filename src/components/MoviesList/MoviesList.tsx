import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const lowerCaseQuery = query.toLowerCase();
  const moviesFilter = movies.filter(movie => {
    if (movie.title.toLowerCase().includes(lowerCaseQuery)
    || movie.description.toLowerCase().includes(lowerCaseQuery)) {
      return true;
    }

    return false;
  });

  return (
    <div className="movies">
      {moviesFilter.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
