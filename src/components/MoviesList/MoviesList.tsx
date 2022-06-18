import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const filteredMovies = movies.filter((movie) => (
    movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    || movie.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  ));

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
