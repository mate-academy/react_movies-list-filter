import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[],
  filter: string,
}

export const MoviesList: React.FC<Props> = (props) => (
  <div className="movies">
    {props.movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} filter={props.filter} />
    ))}
  </div>
);
