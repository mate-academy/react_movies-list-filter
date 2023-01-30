import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const queryLowerCase = query.toLowerCase();
  const visibleMovies = movies.filter(movie => (
    movie.title.toLocaleLowerCase().includes(queryLowerCase)
    || movie.description.toLocaleLowerCase().includes(queryLowerCase)
  ));

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
