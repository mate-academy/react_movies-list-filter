import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}

interface Props {
  movies: Movie[];
  value: string;
}

function visibleMovies(item:Movie, input:string) {
  return item.title.toLowerCase().includes(input.toLocaleLowerCase())
    || item.description.toLowerCase().includes(input.toLocaleLowerCase());
}

export const MoviesList: React.FC<Props> = ({ movies, value }) => (
  <div className="movies">
    {movies.map(movie => (
      visibleMovies(movie, value)
        && <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
