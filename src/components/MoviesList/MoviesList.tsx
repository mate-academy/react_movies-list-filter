import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

const includesString = (str: string, substr: string) => {
  const prettyStr = str.toLowerCase().trim();
  const prettySubstr = substr.toLowerCase();

  return prettyStr.includes(prettySubstr);
};

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    const prettyTitle = movie.title;
    const prettyDescription = movie.description;

    return includesString(prettyTitle, query)
      || includesString(prettyDescription, query);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
