import { useEffect, useState } from 'react';
import { Movie } from '../models/models';
import moviesFromServer from '../api/movies.json';

export const useMovies = (searchWords: string) => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const filtered = moviesFromServer
      .filter(movie => (movie.title + movie.description)
        .toLowerCase().includes(searchWords.toLowerCase()));

    setFilteredMovies(filtered);
  }, [searchWords]);

  return filteredMovies;
};
