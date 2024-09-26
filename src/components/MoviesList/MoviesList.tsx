import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const filterCallback = (movie: Movie): boolean => {
    const condition1 = movie.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const condition2 = movie.description
      .toLowerCase()
      .includes(query.toLowerCase());

    return condition1 || condition2;
  };

  const visibleMovies = query
    ? movies.filter(filterCallback)
    : movies;

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />))}
    </div>
  );
};
