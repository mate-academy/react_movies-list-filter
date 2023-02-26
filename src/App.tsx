import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, inputAskEdit] = useState('');

  const inputInfo: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    inputAskEdit(event.currentTarget.value);
  };

  const isFinded = (whereSearch: string[], whatSearch: string[]) => {
    for (let t = 0; t <= whereSearch.length; t += 1) {
      if (whereSearch[t] === whatSearch[0]) {
        for (let i = 0; i <= whatSearch.length; i += 1) {
          if (i === whatSearch.length) {
            return true;
          }

          if (whereSearch[t + i] !== whatSearch[i]) {
            break;
          }
        }
      } else if (t === whereSearch.length) {
        return false;
      }
    }

    return false;
  };

  const searchHandler = () => {
    const filterInputAsk = query.trim().toLowerCase().split('');
    const isClear = query === '';
    const visibleMovies = isClear
      ? [...moviesFromServer]
      : moviesFromServer.filter((oneOfFilms) => {
        const titleFormatText = oneOfFilms.title.toLowerCase().split('');
        const descrFormatText = oneOfFilms.description.toLowerCase().split('');

        return isFinded(
          titleFormatText,
          filterInputAsk,
        ) || isFinded(
          descrFormatText,
          filterInputAsk,
        );
      });

    return visibleMovies;
  };

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
                value={query}
                onChange={inputInfo}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={searchHandler()} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
