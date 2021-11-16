import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

interface Props {
  visibleMovies: Movie[];
}

export const MoviesList: React.FC <Props> = ({ visibleMovies }) => (
  <div className="movies">
    {visibleMovies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
