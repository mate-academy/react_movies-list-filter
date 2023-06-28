import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMoviesByWord = (movies, query) => {
  const filtered = movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    const desc = movie.description.toLowerCase();
    const q = query.toLowerCase().trim();

    return title.includes(q) || desc.includes(q);
  });

  return filtered;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterMoviesByWord(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
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
