import React, { useEffect, useState } from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  filter: string;
}

export const MoviesList: React.FC<Props> = ({ movies, filter }) => {
  const [visibleMovies, setVisibleMovies] = useState(([...movies]));

  useEffect(() => {
    setVisibleMovies(movies.filter((el: Movie) => {
      return el.title.toLocaleLowerCase()
        .includes(filter)
        || el.description.toLocaleLowerCase()
          .includes(filter);
    }));
  }, [filter]);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
