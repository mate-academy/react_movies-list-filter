import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}


export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const queryToLowerCase = query.toLocaleLowerCase();
  const visibleMovies = movies.filter(
    movie => movie.title.toLocaleLowerCase().includes(queryToLowerCase)
      || movie.description.toLocaleLowerCase().includes(queryToLowerCase),
  );

  return (
    <div className="movies">
      {visibleMovies.map((movie: Movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
