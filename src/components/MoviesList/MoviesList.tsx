import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  inputText: string;
}

export const MoviesList: React.FC<Props> = ({ movies, inputText }) => {
  const validMovie = (movie: Movie) => {
    if (movie.title.toUpperCase().includes(inputText.toUpperCase())
      || movie.description.toUpperCase().includes(inputText.toUpperCase())) {
      return true;
    }

    return false;
  };

  return (
    <div className="movies">
      {movies.map(movie => (
        validMovie(movie)
          ? <MovieCard key={movie.imdbId} movie={movie} />
          : null
      ))}
    </div>
  );
};
