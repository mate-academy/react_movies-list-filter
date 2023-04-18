import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    const formattedQuery = query.toLowerCase().trim();
    const formattedTitle = movie.title.toLowerCase();
    const formattedDescr = movie.description.toLowerCase();

    return formattedTitle.includes(formattedQuery)
            || formattedDescr.includes(formattedQuery);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
