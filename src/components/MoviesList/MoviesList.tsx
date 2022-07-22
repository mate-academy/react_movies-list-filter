import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  inputText: string;
}

export const MoviesList: React.FC<Props> = ({ movies, inputText }) => {
  const standardize = (word : string) => {
    return word.toLowerCase().trim();
  };

  const isMovieFit = (movie: Movie) => {
    return standardize(movie.title).includes(standardize(inputText))
      || standardize(movie.description).includes(standardize(inputText));
  };

  return (
    <div className="movies">
      {movies.map(movie => (
        isMovieFit(movie)
          ? <MovieCard key={movie.imdbId} movie={movie} />
          : null
      ))}
    </div>
  );
};
