import { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const checkMovie = (
  movieInfo: string,
  searchQuery: string,
): boolean => {
  return movieInfo.toLowerCase()
    .includes(searchQuery.toLowerCase().trim());
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies = moviesFromServer.filter(movie => {
    const {
      title,
      description,
    } = movie;

    return checkMovie(title, query)
      || checkMovie(description, query);
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label
              htmlFor="search-query"
              className="label"
            >
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                name="query"
                value={query}
                onChange={handleSearchQuery}
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
