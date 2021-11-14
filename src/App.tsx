/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  render() {
    const includesStateQuery = (title: string, description: string, query: string): boolean => {
      return title.toLowerCase().includes(query.toLowerCase())
        || description.toLowerCase().includes(query.toLowerCase());
    };

    const { query } = this.state;

    const visibleMovies = moviesFromServer
      .filter(({ title, description }) => includesStateQuery(title, description, query));

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
                  onChange={(event) => {
                    this.setState({ query: event.target.value });
                  }}
                  name="search-by-query"
                  value={query}
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
  }
}
