import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface MoviesListProps {
  movies: Movie[];
  filter: string;
}

function check(element: string, filter: string) {
  return element.includes(filter.toLocaleLowerCase());
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies, filter }) => (
  <div className="movies">
    {movies.filter(element => check(element.title.toLocaleLowerCase(), filter)
    || check(element.description.toLocaleLowerCase(), filter))
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);
