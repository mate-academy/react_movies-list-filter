import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const filteredMovies = movies.filter(movie => {
    const lowerCaseTitle = movie.title.toLowerCase();
    const lowerCaseDescription = movie.description.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return (lowerCaseTitle.includes(lowerCaseQuery)
    || lowerCaseDescription.includes(lowerCaseQuery));
  });

  return (
    <div className="movies">
      {
        filteredMovies.map((movie: Movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))
      }
    </div>
  );
};
