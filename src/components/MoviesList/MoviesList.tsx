import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[],
  searchValue: string,
}

export const MoviesList: React.FC<Props> = ({ movies, searchValue = '' }) => {
  const visibleMovies = movies.filter(movie => {
    const searchFilm = searchValue.toLocaleLowerCase();
    const title = movie.title.toLocaleLowerCase();
    const description = movie.description.toLocaleLowerCase();

    return title.includes(searchFilm) || description.includes(searchFilm);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
