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
    if (filter) {
      setVisibleMovies(movies.filter((el: Movie) => {
        if (
          el.title.toLocaleLowerCase()
            .includes(filter)
          || el.description.toLocaleLowerCase()
            .includes(filter)
        ) {
          return el;
        }

        return null;
      }));
    } else {
      setVisibleMovies([...movies]);
    }
  }, [filter]);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
