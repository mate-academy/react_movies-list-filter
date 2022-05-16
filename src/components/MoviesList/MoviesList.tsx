import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  serchSrt: string;
}

export const MoviesList: React.FC<Props> = ({ movies, serchSrt }) => (
  <div className="movies">
    {movies.map(movie => {
      if (movie.title.toLowerCase().includes(serchSrt)
          || movie.description.toLowerCase().includes(serchSrt)
        ) {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      }

      return '';
    })}
  </div>
);
