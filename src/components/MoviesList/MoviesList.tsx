import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies
  = movies.filter((movie) => {
    const queryToLowerCase = query.toLowerCase();

    return (
      movie.title.toLowerCase()
        .includes(queryToLowerCase)
      || (movie.description.toLowerCase().includes(queryToLowerCase))
    );
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
