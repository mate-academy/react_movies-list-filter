import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  searchParam: string;
}

export const MoviesList: React.FC<Props> = ({
  movies,
  searchParam = '',
}) => {
  const filteredMovies = movies.filter(movie => {
    const searchString = searchParam.toLowerCase();
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();

    return movieTitle.includes(searchString)
      || movieDescription.includes(searchString);
  });

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
