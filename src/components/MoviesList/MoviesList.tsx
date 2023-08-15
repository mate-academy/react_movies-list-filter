/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  let visibleMovies = false;

  return (
    <div className="movies">
      {movies.map(movie => {
        movie.title.toLowerCase().includes(query.toLowerCase().trim())
        || movie.description.toLowerCase().includes(query.toLowerCase().trim())
          ? visibleMovies = true
          : visibleMovies = false;

        return (
          (visibleMovies && <MovieCard key={movie.imdbId} movie={movie} />)
        );
      })}
    </div>
  );
};
