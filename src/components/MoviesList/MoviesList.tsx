import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Props = {
  visibleMovies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ visibleMovies }) => {
  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
