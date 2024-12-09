import { FC, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

function isPresentInString(value: string, keyword: string) {
  return value.toLowerCase().includes(keyword.toLowerCase());
}

export const App: FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer
    .filter(({ title, description }: Movie) => {
      const keyword = query.trim();
      const isInTitle = isPresentInString(title, keyword);
      const isInDescription = isPresentInString(description, keyword);

      return isInTitle || isInDescription;
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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
