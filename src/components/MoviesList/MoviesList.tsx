import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter((movie) => {
    const formattedTitle = movie.title.toLowerCase();
    const formattedDescription = movie.description.toLowerCase();
    const formattedQuery = query.toLowerCase().trim();

    return formattedTitle.includes(formattedQuery)
      || formattedDescription.includes(formattedQuery);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
