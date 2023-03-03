import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  selectedMovies: string;
}

export const MoviesList: React.FC<Props> = ({ movies, selectedMovies }) => {
  const filtered = (allMovies: Movie[]) => {
    return allMovies.filter(e => {
      const lowerCaseOrigin = e.title.toLocaleLowerCase();
      const lowerCaseSelected = selectedMovies.toLocaleLowerCase();

      return lowerCaseOrigin.includes(lowerCaseSelected);
    });
  };

  return (
    <div className="movies">
      {selectedMovies
        ? filtered(movies).map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))
        : movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
    </div>
  );
};
