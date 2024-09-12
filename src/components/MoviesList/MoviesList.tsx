import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface Movie {
  imdbId: string;
  title: string;
  description: string;
  imdbUrl: string;
  imgUrl: string;
}

type Query = string;

interface Props {
  movies: Movie[];
  query: Query;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  let visibleMovies = movies;

  if (query) {
    visibleMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        movie.description.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
