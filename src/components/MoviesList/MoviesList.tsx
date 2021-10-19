import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => (
  <div className="movies">
    {movies.filter(movie => {
      const seachQuery = query.toLowerCase();
      const movieTitle = movie.title.toLowerCase();
      const movieDescription = movie.description.toLowerCase();

      return movieTitle.includes(seachQuery)
      || movieDescription.includes(seachQuery);
    }).map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
