import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies:Movie[] = movies.filter(movie => {
    const queryToLower:string = query.toLowerCase();
    const isQueryInTitle:boolean = movie.title.toLowerCase()
      .includes(queryToLower);
    const isQueryInDescription:boolean = movie.description.toLowerCase()
      .includes(queryToLower);

    return isQueryInTitle || isQueryInDescription;
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
