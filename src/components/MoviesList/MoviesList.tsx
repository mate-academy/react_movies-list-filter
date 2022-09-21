import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  searchWord: string;
}

export const MoviesList: React.FC<Props> = ({ movies, searchWord }) => {
  const query = searchWord.toLowerCase();
  const visibleMovies = movies
    .filter(
      (movie) => movie.title.toLowerCase().includes(query)
        || movie.description.toLowerCase().includes(query),
    );

  return (
    <div className="movies">
      {visibleMovies
        ? (visibleMovies).map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))
        : (movies).map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
    </div>
  );
};
