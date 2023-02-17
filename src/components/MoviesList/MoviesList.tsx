import React, { useEffect, useState } from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  filter: string
}

export const MoviesList: React.FC<Props> = ({ movies, filter }) => {
  const [copyList, setCopyList] = useState(([...movies]));

  useEffect(() => {
    if (filter) {
      setCopyList(movies.filter((el: Movie) => {
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
      setCopyList([...movies]);
    }
  }, [filter]);

  return (
    <div className="movies">
      {copyList.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
