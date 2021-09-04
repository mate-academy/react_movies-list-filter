import React from 'react';
import { MoviesList } from '../MoviesList/MoviesList';

interface Props {
  moviesFromServer: Movie[];
  query: string;
}

export const FilterMovie: React.FC<Props> = (props) => {
  const { moviesFromServer, query } = props;
  const filterMovies = moviesFromServer
    .filter((movie: Movie) => movie.title.toLocaleLowerCase()
      .includes(query.toLocaleLowerCase())
      || movie.description.toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()));

  return (
    <MoviesList movies={filterMovies} />
  );
};
