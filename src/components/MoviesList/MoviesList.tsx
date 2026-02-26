import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
  query: string;
};

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const normalizedQuery = query.trim().toLowerCase();

  const visibleMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery),
  );

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
