import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Movie = {
  title: string
  description: string
  imgUrl: string
  imdbUrl: string
  imdbId: string
};

export const App: React.FC = () => {
  const [visibleMovies, setVisibleMovies] = React.useState(moviesFromServer);
  const [query, setQuery] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim().toLowerCase());
  };

  React.useEffect(() => {
    setVisibleMovies((prevMovies = []): Movie[] => {
      if (!query) {
        return moviesFromServer;
      }

      return prevMovies.filter((movie: Movie) => movie.title
        .toLowerCase().includes(query)
        || movie.description.toLowerCase().includes(query));
    });
  }, [query]);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                onChange={handleChange}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
