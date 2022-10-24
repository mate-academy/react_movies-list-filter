import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  searchWord: string
}

export const MoviesList: React.FC<Props> = ({ movies, searchWord }) => (
  <div className="movies">
    {movies.filter((movie) => {
      return (
        movie.title.toLowerCase()
          .includes(searchWord.toLowerCase())
        || movie.description.toLowerCase()
          .includes(searchWord.toLowerCase()));
    }).map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
