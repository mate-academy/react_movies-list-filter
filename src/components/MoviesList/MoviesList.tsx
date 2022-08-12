import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter(
    el => el.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      || el.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );

  return (
    <div className="movies">
      {visibleMovies.map((movie: Movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
