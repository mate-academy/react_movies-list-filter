import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const queryTolowerCase = query.toLowerCase();
  const visibleMovies = movies.filter(movie => {
    const { description, title } = movie;

    return title.toLowerCase().includes(queryTolowerCase)
      || description.toLowerCase().includes(queryTolowerCase);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
