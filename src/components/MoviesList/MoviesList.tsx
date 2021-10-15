import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  searchValue: string;
}

export const MoviesList: React.FC<Props> = ({
  movies,
  searchValue = '',
}) => {
  const filteredMovies = movies.filter(item => {
    const searchRequest = searchValue.toLowerCase();
    const title = item.title.toLowerCase();
    const descrip = item.description.toLowerCase();

    return title.includes(searchRequest)
      || descrip.includes(searchRequest);
  });

  return (
    <div className="movies">
      {filteredMovies.map(item => (
        <MovieCard key={item.imdbId} movie={item} />
      ))}
    </div>
  );
};
