import { FC, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: FC = () => {
  const [query, setQuery] = useState('');

  const selectedFilms = (movies: Movie[], searchQuery: string): Movie[] => (
    movies.filter(movie => {
      const preparedTitle = movie.title.toLocaleLowerCase();
      const preparedDescription = movie.description.toLocaleLowerCase();
      const preparedQuery = searchQuery.toLocaleLowerCase();

      return preparedTitle.includes(preparedQuery)
        || preparedDescription.includes(preparedQuery);
    })
  );

  const handleQuery = (event: { target: { value: string; }; }) => {
    setQuery((event.target.value).toLocaleLowerCase().trim());
  };

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={selectedFilms(moviesFromServer, query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
