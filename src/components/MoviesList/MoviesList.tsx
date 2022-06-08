import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  inputedValue: string;
}

export const MoviesList: React.FC<Props> = ({ movies, inputedValue }) => {
  const upperCaseValue = inputedValue.toUpperCase();

  const filterMovies = (value: string) => {
    return [...movies].filter(
      movie => movie.title.toUpperCase().includes(value)
      || movie.description.toUpperCase().includes(value),
    );
  };

  const moviesFiltered = filterMovies(upperCaseValue);

  return (
    <div className="movies">
      {moviesFiltered.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
