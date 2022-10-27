import React, { useEffect } from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  allMovies: Movie[];
  visibleMovies: Movie[];
  query: string;
  changeMovies: (movie: Movie[]) => void;
};

export const MoviesList: React.FC<Props> = ({
  allMovies,
  visibleMovies,
  query,
  changeMovies,
}) => {
  useEffect(() => {
    const queryTolowerCase = query.toLowerCase();

    changeMovies(allMovies.filter(movie => {
      const { description, title } = movie;

      return title.toLowerCase().includes(queryTolowerCase)
        || description.toLowerCase().includes(queryTolowerCase);
    }));
  }, [query]);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
