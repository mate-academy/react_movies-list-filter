import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  currentQuery: string;
}

export const MoviesList: React.FC<Props> = ({ movies, currentQuery }) => {
  const visibleMovies = movies.filter(movie => {
    const { title, description } = movie;

    return title.toLowerCase().includes(currentQuery)
    || description.toLowerCase().includes(currentQuery);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
