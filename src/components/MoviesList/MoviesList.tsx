import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

function showChosenMovie(movies: Movie[], query: string) {
  const lowerCaseQuery = query.toLowerCase();

  return movies.filter(movie => (
    movie.title.toLowerCase().includes(lowerCaseQuery)
    || movie.description.toLowerCase().includes(lowerCaseQuery)
  ));
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = showChosenMovie(movies, query);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
