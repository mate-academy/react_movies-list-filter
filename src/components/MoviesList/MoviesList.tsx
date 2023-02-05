import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const getVisibleMovies = () => {
    const searchStr = query.toLowerCase().trim();
    const visibleMovies = movies.filter(movie => {
      const { title, description } = movie;

      return title.toLowerCase().includes(searchStr)
        || description.toLowerCase().includes(searchStr);
    });

    return visibleMovies;
  };

  const visibleMovies = getVisibleMovies();

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
