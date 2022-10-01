import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  search: string;
}

export const MoviesList: React.FC<Props> = ({ movies, search }) => (
  <div className="movies">
    {movies
      .filter(movie => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
        || movie.description.toLowerCase().includes(search.toLowerCase());
      })
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);
