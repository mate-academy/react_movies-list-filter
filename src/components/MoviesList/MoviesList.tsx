import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const isQueryMatch = (text: string) => text
    .toLowerCase()
    .includes(query.toLowerCase());

  const visibleMovies = movies.filter(({
    title,
    description,
  }) => isQueryMatch(title) || isQueryMatch(description));

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
