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

  render() {
    const { query } = this.state;

    const filteredMovies = moviesFromServer.filter(({ title, description }) => {
      return (
        title.toLowerCase().includes(query.toLocaleLowerCase())
      || description.toLowerCase().includes(query.toLocaleLowerCase())
      );
    });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
                <div className="control">
                  <input
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={query}
                    onChange={(event) => {
                      this.setState({ query: event.target.value });
                    }}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
