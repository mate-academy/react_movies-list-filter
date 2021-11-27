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

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value.toUpperCase() });
  };

  render() {
    const { query } = this.state;

    const visibleMovies = moviesFromServer.filter(movie => {
      return (movie.title + movie.description).toUpperCase().includes(query);
    });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              {/* eslint-disable-next-line */}
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.handleSearch}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={query === ''
            ? moviesFromServer
            : visibleMovies}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
