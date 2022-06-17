import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

function FilterMovies(movies: Movie[], query: string) {
  const loverCaseQuery = query.toLowerCase();

  return movies.filter(movie => (
    movie.title.toLowerCase().includes(loverCaseQuery)
    || movie.description.toLowerCase().includes(loverCaseQuery)
  ));
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = FilterMovies(movies, query);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
};
