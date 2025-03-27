import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
  imdbId: string;
  title: string;
  imgUrl: string;
  description: string;
  imdbUrl: string;
}

interface MoviesListProps {
  movies: Movie[];
  search: string;
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies, search }) => (
  <div className="movies">
    {movies
      .filter(
        movie =>
          movie.title.toLowerCase().includes(search.toLowerCase().trim()) ||
          movie.description.toLowerCase().includes(search.toLowerCase().trim()),
      )
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);
