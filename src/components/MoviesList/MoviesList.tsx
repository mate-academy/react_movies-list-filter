import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[],
  searchValue: string,
}

export const MoviesList: React.FC<Props> = ({
  movies,
  searchValue = '',
}) => {
  const filteredMovies = movies.filter(item => {
    const searchReq = searchValue.toLocaleLowerCase();
    const title = item.title.toLocaleLowerCase();
    const description = item.description.toLocaleLowerCase();

    return title.includes(searchReq) || description.includes(searchReq);
  });

  return (
    <div className="movies">
      {filteredMovies.map(item => (
        <MovieCard key={item.imdbId} movie={item} />
      ))}
    </div>
  );
};
