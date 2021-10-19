import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';
import filterMovies from '../../utils/filterMovies';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => (
  <div className="movies">
    {filterMovies(movies, query).map(movie => (
      <MovieCard
        key={movie.imdbId}
        movie={movie}
      />
    ))}
  </div>
);
