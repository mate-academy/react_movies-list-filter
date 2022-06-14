import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    const isQueryInTitle = movie.title.toLowerCase()
      .includes(query.toLowerCase());
    const isQueryInDescription = movie.description.toLowerCase()
      .includes(query.toLowerCase());

    if (isQueryInTitle || isQueryInDescription) {
      return movie;
    }

    return null;
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
