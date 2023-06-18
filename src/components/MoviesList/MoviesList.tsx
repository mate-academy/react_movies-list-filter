import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  search: string;
}

let visibleMovies: Movie[] = [];

export const MoviesList: React.FC<Props> = ({ movies, search }) => {
  visibleMovies = movies;
  if (search.length > 0) {
    visibleMovies = movies.filter(element => (
      (element.title.toLowerCase()).includes(search))
      || (element.description.toLowerCase()).includes(search));
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
