import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter(
    value => value.title.toLowerCase().includes(query.toLowerCase())
      || value.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
};
