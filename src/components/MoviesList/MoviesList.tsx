import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => (
  <div className="movies">
    {movies
      .filter(item => {
        let { title, description } = item;

        title = title.toLocaleLowerCase();
        description = description.toLocaleLowerCase();

        return !query || (title.includes(query) || description.includes(query));
      })
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);
