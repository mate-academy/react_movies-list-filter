import React, { memo } from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

const isMatchQuery = (text: string, query: string): boolean => {
  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase().trim();

  return normalizedText.includes(normalizedQuery);
};

export const filterMovies = (
  movies: Movie[],
  query: string,
): Movie[] => {
  if (!query) {
    return movies;
  }

  return movies
    .filter(({ title, description }) => {
      const foundInTitle = isMatchQuery(title, query);
      const foundInDescription = isMatchQuery(description, query);

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
