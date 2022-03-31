import './App.scss';
import { ChangeEvent, FC, useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies
      = moviesFromServer.filter(({ title, description }) => {
        const lowerCaseQuery = query.toLowerCase();
        const lowerCaseTitle = title.toLowerCase();
        const lowerCaseDescription = description.toLowerCase();

        return lowerCaseTitle.includes(lowerCaseQuery)
        || lowerCaseDescription.includes(lowerCaseQuery);
      });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={handleInputChange}
                />
              </div>
            </label>
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
