import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => (
  <div className="movies">
    {movies.map((movie) => {
      if (movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())) {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      }

      return false;
    })}
  </div>
);
