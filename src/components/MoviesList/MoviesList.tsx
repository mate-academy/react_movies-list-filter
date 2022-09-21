import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  searchValue: string;
}

export const MoviesList: React.FC<Props> = ({ movies, searchValue }) => {
  const visibleMovies = movies.filter((movie) => (
    movie.description.toLowerCase().includes(searchValue.toLowerCase())
    || movie.title.toLowerCase().includes(searchValue.toLowerCase())
  ));

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
