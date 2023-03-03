import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

const filtered = (moviesList: Movie[], query: string) => {
  if (!query) {
    return moviesList;
  }

  return moviesList.filter(e => {
    const lowerTitle = e.title.toLocaleLowerCase();
    const lowerQuery = query.toLocaleLowerCase();

    return lowerTitle.includes(lowerQuery);
  });
};

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = filtered(movies, query);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
