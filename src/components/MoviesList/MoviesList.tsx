import React, { useEffect, useState } from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

interface Props {
  movies: Movie[];
  movieTitle: string;
}

export const MoviesList: React.FC<Props> = ({ movies, movieTitle }) => {
  const [moviesToShow, setMoviesToShow] = useState(movies);

  useEffect(() => {
    const visibleMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(movieTitle.toLowerCase().trim()) ||
        movie.description
          .toLowerCase()
          .includes(movieTitle.toLowerCase().trim()),
    );

    setMoviesToShow(visibleMovies);
  }, [movieTitle, movies]);

  return (
    <div className="movies">
      {moviesToShow.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
