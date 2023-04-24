import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter((movie) => {
    const filteredTitle = movie.title.toLowerCase();
    const filteredDescription = movie.description.toLowerCase();
    const filteredQuery = query.toLowerCase();

    return filteredTitle.includes(filteredQuery)
      || filteredDescription.includes(filteredQuery);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
