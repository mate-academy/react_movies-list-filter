import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  searchValue: string;
}

export const MoviesList: React.FC<Props> = ({ movies, searchValue }) => {
  const includesCheck = (text: string) => {
    return text.toLowerCase().includes(searchValue.toLowerCase());
  };

  const visibleMovies = movies.filter((movie) => (
    includesCheck(movie.description)
    || includesCheck(movie.title)
  ));

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
