import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const filteredMovies = movies
    .filter((movie: Movie) => {
      const titleToLowerCase = movie.title.toLowerCase();
      const descriptionToLowerCase = movie.description.toLowerCase();
      const normalizedQuery = query
        .toLowerCase()
        .replace(/\s{2,}/g, ' ');

      return titleToLowerCase.includes(normalizedQuery)
        || descriptionToLowerCase.includes(normalizedQuery);
    });

  return (
    <div className="movies">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
