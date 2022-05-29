import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter((movie) => {
    const titleLower = movie.title.toLowerCase();
    const descrLower = movie.description.toLowerCase();
    const queryLower = query.toLowerCase();

    return titleLower.includes(queryLower) || descrLower.includes(queryLower);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
