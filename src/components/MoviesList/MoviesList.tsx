import './MoviesList.scss';
import React, { useMemo } from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[],
  query: string,
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = useMemo(() => movies.filter((movie) => {
    const { description, title } = movie;

    return description.toLowerCase().includes(query)
      || title.toLowerCase().includes(query);
  }), [query]);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
