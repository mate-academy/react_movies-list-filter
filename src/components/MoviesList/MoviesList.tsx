import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string,
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  function getCheckQuery(str: string) {
    return str.toUpperCase().includes(query.toUpperCase().trim());
  }

  return (
    <div className="movies">
      {
        movies.filter(
          item => getCheckQuery(item.title) || getCheckQuery(item.description),
        ).map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))
      }
    </div>
  );
};
