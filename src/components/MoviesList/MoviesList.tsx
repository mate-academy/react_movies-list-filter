import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

import { Movie } from '../../types/types';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const queryLowerCase = query.toLowerCase().trim();

  const visibleMovies = movies.filter(movie => {
    const titleMatch =
      movie.title && movie.title.toLowerCase().includes(queryLowerCase);
    const descriptionMatch =
      movie.description &&
      movie.description.toLowerCase().includes(queryLowerCase);

    return titleMatch || descriptionMatch;
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
