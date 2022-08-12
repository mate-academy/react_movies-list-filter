import React, { useEffect, useState } from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  querySearch: string;
}

export const MoviesList: React.FC<Props> = ({ movies, querySearch }) => {
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>([]);

  const filtredMovi = movies.filter(movie => (
    movie.title.toLocaleLowerCase().includes(querySearch.toLowerCase())
    || movie.description.toLocaleLowerCase().includes(querySearch.toLowerCase())
  ));

  useEffect(() => setVisibleMovies(filtredMovi), [querySearch]);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
