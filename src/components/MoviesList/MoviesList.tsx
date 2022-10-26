import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const queryLowerCase = query.toLowerCase();

  const filteredMovies = movies.filter((movie) => (
    movie.title.toLowerCase().includes(queryLowerCase)
    || movie.description.toLowerCase().includes(queryLowerCase)
  ));

  return (
    <div className="movies">
      {filteredMovies.map((movie) => {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      })}
    </div>
  );
};
