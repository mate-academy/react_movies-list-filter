import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  visibleMovies: string;
}

export const MoviesList: React.FC<Props> = ({ movies, visibleMovies }) => (
  <div className="movies">
    {movies.filter(mov => {
      const visibleMov = visibleMovies.toLowerCase();
      const titleMov = mov.title.toLowerCase();
      const descriptionMov = mov.description.toLowerCase();

      return titleMov.includes(visibleMov) || descriptionMov.includes(visibleMov);
    })
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);
