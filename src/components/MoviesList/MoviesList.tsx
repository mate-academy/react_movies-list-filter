import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  byQuery: string;
}

export const MoviesList: React.FC<Props> = ({ movies, byQuery }) => {
  const visibleMovies = movies.filter((movie) => {
    const lowerTitle = movie.title.toLowerCase();
    const lowerDescription = movie.description.toLowerCase();
    const lowerByQuery = byQuery.toLowerCase();

    return (
      lowerTitle.includes(lowerByQuery)
      || lowerDescription.includes(lowerByQuery)
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
