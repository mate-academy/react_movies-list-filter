import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Props as MovieCardProps } from '../MovieCard';

type MoviesListProps = {
  movies: MovieCardProps['movie'][];
};

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
