import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    const lowerQuery = query.toLowerCase();
    const lowerTitle = movie.title.toLowerCase();
    const lowerDescription = movie.description.toLowerCase();

    return (lowerDescription.includes(lowerQuery)
    || lowerTitle.includes(lowerQuery));
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
