import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

const filterList = (array: Movie[], string: string) => {
  const lowQuery = string.toLowerCase();

  return array.filter((movie: Movie) => {
    return movie.title.toLowerCase().includes(lowQuery)
      || movie.description.toLowerCase().includes(lowQuery);
  });
};

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const filteredMovie = filterList(movies, query);

  return (
    <div className="movies">
      {filteredMovie.map(movie => {
        return (
          <MovieCard key={movie.imdbId} movie={movie} />
        );
      })}
    </div>
  );
};
