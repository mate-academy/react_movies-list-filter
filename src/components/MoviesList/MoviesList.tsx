import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const filterMovies = movies.filter((movie) => (
    (movie.title + movie.description)
      .toLowerCase()
      .includes(query.toLowerCase())
  ));

  return (
    <div className="movies">
      {filterMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
