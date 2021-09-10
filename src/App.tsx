/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;

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
                  name="query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList
            movies={moviesFromServer}
            query={query}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
