import React from 'react';
import { MoviesList } from '../MoviesList/MoviesList';

interface Props {
  moviesFromServer: Movie[];
  query: string;
}

export const FilterMovie: React.FC<Props> = (props) => {
  const { moviesFromServer, query } = props;
  const queryToLowerCase = query.toLocaleLowerCase();
  const filterMovies = moviesFromServer
    .filter((movie: Movie) => movie.title.toLocaleLowerCase()
      .includes(queryToLowerCase)
      || movie.description.toLocaleLowerCase()
        .includes(queryToLowerCase));

  return (
    <MoviesList movies={filterMovies} />
  );
};
