import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  let visibleMovies = [...movies];

  if (query) {
    visibleMovies = visibleMovies.filter(movie => {
      return movie.title.toLowerCase().includes(query.toLocaleLowerCase())
        || movie.description.toLowerCase().includes(query.toLowerCase());
    });
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
