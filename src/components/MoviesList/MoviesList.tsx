import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string
}

const filteredFilms = (value: string, films: Movie[]) => {
  return films.filter(film => film.title
    .toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())
    || film.description
      .toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()));
};

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const filteredMovies = filteredFilms(query, movies);

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
