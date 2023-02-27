import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  searchValue: string;
}

const searchWords = (mText: string, sText: string) => {
  return mText.toLowerCase()
    .indexOf(sText.trim().toLowerCase()) > -1;
};

export const MoviesList: React.FC<Props> = ({ movies, searchValue }) => {
  const searchMovies = () => {
    if (searchValue.length === 0) {
      return movies;
    }

    return movies
      .filter(({ title, description }) => {
        return searchWords(title, searchValue)
          || searchWords(description, searchValue);
      });
  };

  const visibleMovies = searchMovies();

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
