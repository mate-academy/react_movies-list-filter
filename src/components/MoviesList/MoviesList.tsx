import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const filteredMovies = movies.filter(movie => {
    const searchQuery = query.toLowerCase();
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();

    return movieTitle.includes(searchQuery)
      || movieDescription.includes(searchQuery);
  });

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
