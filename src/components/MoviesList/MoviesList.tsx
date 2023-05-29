import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  filter: string;
}

export const MoviesList: React.FC<Props> = ({ movies, filter }) => (
  <div className="movies">
    {movies.filter(element => element.title.toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase())
    || element.description.toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase()))
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);
