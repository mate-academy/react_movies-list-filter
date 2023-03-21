import React, { memo } from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const filterMovies = (
  movies: Movie[],
  query: string,
): Movie[] => {
  if (!query) {
    return movies;
  }

  const normalizedQuery = query.toLowerCase().trim();

  return movies
    .filter(movie => {
      const { title, description } = movie;
      const normalizedTitle = title.toLowerCase();
      const normalizedDescription = description.toLowerCase();

      return (normalizedTitle.includes(normalizedQuery)
        || normalizedDescription.includes(normalizedQuery)
      );
    });
};

export const MoviesList: React.FC<Props> = memo(({ movies, query }) => {
  const visibleMovies = filterMovies(movies, query);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
});
