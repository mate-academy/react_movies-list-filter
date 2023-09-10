import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  filter: string;
}

export const MoviesList: React.FC<Props> = ({ movies, filter }) => {
  return (
    <div className="movies">
      {movies.filter(v => v.title.toLowerCase()
        .includes(filter.toLowerCase().trimStart().trimEnd())
        || v.description.toLowerCase()
          .includes(filter.toLowerCase().trimStart().trimEnd()))
        .map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
    </div>
  );
};
