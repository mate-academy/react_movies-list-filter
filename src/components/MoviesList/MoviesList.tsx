import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

function filterMovies(filterValue : string, list : Movie[]) {
  return (list.filter((movie : Movie) => {
    const loweredTitle = movie.title.toLowerCase();
    const loweredDescription = movie.description.toLowerCase();

    if ((loweredTitle.includes(filterValue))
    || (loweredDescription.includes(filterValue))) {
      return movie;
    }

    return undefined;
  }));
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => (
  <div className="movies">
    {filterMovies(query, movies).map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
