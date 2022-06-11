import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  inputValue: string;
}

export const MoviesList: React.FC<Props> = ({ movies, inputValue }) => {
  const inputValueL = inputValue.toLowerCase();
  const filtredMovies = movies
    .filter(movie => movie.title.toLowerCase().includes(inputValueL)
    || movie.description.toLowerCase().includes(inputValueL));

  return (
    <div className="movies">
      {filtredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
