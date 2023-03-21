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
    .filter(({ title, description }) => {
      const normalizedTitle = title.toLowerCase();
      const normalizedDescription = description.toLowerCase();

      const foundInTitle = normalizedTitle.includes(normalizedQuery);
      const foundInDescription
        = normalizedDescription.includes(normalizedQuery);

      return foundInTitle || foundInDescription;
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
