import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  Serch: string;
}

export const MoviesList: React.FC<Props> = ({ movies, Serch }) => (
  <div className="movies">
    {movies.map(movie => {
      if (movie.title.toLowerCase().includes(Serch)
        || movie.description.toLowerCase().includes(Serch)) {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      }

      return '';
    })}
  </div>
);
