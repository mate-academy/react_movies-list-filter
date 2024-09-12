import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filtered(title: string, substring: string) {
  const transformString = title.toLowerCase();
  const transformSubstring = substring.toLowerCase().trim();

  return transformString.includes(transformSubstring);
}

function showMovies(query: string) {
  return moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return filtered(title, query) || filtered(description, query);
  });
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies = showMovies(query);

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
                value={query}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
