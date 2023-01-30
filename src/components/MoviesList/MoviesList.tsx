import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  filterItem: string;
}

export const MoviesList: React.FC<Props> = ({ movies, filterItem }) => {
  const filterItemLowerCase = filterItem.toLowerCase().trim();
  const visibleMovies = movies
    .filter(({ title, description }) => {
      const titleLowerCase = title.toLowerCase();
      const descriptionlowerCase = description.toLowerCase();

      const inTitle = titleLowerCase.includes(filterItemLowerCase);
      const inDescription = descriptionlowerCase.includes(filterItemLowerCase);

      return inTitle || inDescription;
    });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
