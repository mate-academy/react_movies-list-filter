import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  searchQuery: string;
}

export const MoviesList: React.FC<Props> = ({ movies, searchQuery }) => {
  const filteredMovies = movies.filter(
    movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    || movie.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
