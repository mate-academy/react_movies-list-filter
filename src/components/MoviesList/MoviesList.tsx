import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    const prettyQuery = query.toLowerCase().trim();
    const prettyTitle = movie.title.toLocaleLowerCase();
    const prettyDescription = movie.description.toLowerCase();

    return prettyTitle.includes(prettyQuery)
      || prettyDescription.includes(prettyQuery);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
