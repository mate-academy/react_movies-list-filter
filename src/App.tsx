/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  search: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    search: '',
  };

  render() {
    const { search } = this.state;

    const visibleMovies = moviesFromServer.filter(
      ({ title, description }) => title.toLowerCase().includes(search.toLowerCase())
    || description.toLowerCase().includes(search.toLowerCase()),
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
                  value={search}
                  onChange={(event) => {
                    this.setState({
                      search: event.target.value,
                    });
                  }}
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
