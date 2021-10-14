import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  query: string;
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const filteredList = movies
    .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="movies">
      {filteredList.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
