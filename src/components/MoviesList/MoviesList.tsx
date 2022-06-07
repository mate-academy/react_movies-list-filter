import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const lowQuery = query.toLowerCase();
  // eslint-disable-next-line max-len
  const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(lowQuery)
    || movie.description.toLowerCase().includes(lowQuery));

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
