import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const lowerQuery = query.toLowerCase();
  const visibleMovies = movies
    .filter((movie) => movie.title.toLowerCase().includes(lowerQuery)
    || movie.description.toLowerCase().includes(lowerQuery));

  return (

    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
