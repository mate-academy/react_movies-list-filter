import { FC, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: FC = () => {
  const [SearchedText, setSearchedText] = useState('');
  const visibleMovies = moviesFromServer.filter(
    ({ title, description }) => (
      title.toLocaleLowerCase().includes(SearchedText)
      || description.toLocaleLowerCase().includes(SearchedText)
    ),
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={
                  ({ target }) => setSearchedText(
                    () => target.value.toLocaleLowerCase(),
                  )
                }
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
