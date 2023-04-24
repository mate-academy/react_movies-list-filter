import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => (
  <div className="movies">
    {movies.map(movie => {
      const isNeededTitle = movie.title.toLowerCase().includes(query.toLowerCase().trim()); // eslint-disable-line
      const isNeededDesc = movie.description.toLowerCase().includes(query.toLowerCase().trim()); // eslint-disable-line

      return (isNeededTitle || isNeededDesc) && (
        <MovieCard key={movie.imdbId} movie={movie} />
      );
    })}
  </div>
);
