import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  function visibleMovies(moviess: Movie[], queryy: string) {
    const filteredMovies = moviess.filter(movie => (
      movie.title.toLowerCase().includes(queryy)
      || movie.description.toLowerCase().includes(queryy)
    ));

    return filteredMovies;
  }

  const filmFiltered = visibleMovies(movies, query);

  return (
    <div className="movies">
      {filmFiltered.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
