import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const foundSubstring = (subString: string, string: string) => {
  const str = string.trim().toLowerCase();
  const subStr = subString.trim().toLowerCase();

  return str.includes(subStr);
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredFilms = () => moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return (
      foundSubstring(query, title)
      || foundSubstring(query, description)
    );
  });

  const vissibleMovies = filteredFilms();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => (
    setQuery(event.target.value)
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
                value={query || ''}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={vissibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
