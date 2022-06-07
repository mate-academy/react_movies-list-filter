import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string,
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const queryLowerCase = query.toLowerCase();

  const searchMovies = movies.filter(movie => (
    movie.title.toLowerCase().includes(queryLowerCase)
    || movie.description.toLowerCase().includes(queryLowerCase)
  ));

  return (
    <div className="movies">

      {searchMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
