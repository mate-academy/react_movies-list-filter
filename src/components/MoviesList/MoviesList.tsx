import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  search: string;
}

export const MoviesList: React.FC<Props> = ({ movies, search }) => {
  const visibleMovies = movies.filter(({
    title,
    description,
  }) => title.toLowerCase().includes(search.toLowerCase())
    || description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
