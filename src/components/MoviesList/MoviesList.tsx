import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[],
  search: string,
}

export const MoviesList: React.FC<Props> = ({ movies, search }) => {
  const copy = [...movies];
  let visibleMovies = [...movies];

  if (search !== '') {
    visibleMovies = copy.filter(movie => (
      movie.title.toLowerCase().includes(search.toLowerCase())
      || movie.description.toLowerCase().includes(search.toLowerCase())
    ));
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
