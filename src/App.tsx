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
    const { query } = this.state;
    const moviesFiltered = moviesFromServer
      .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())
        || movie.description.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie

                <div className="control">
                  <input
                    name="query"
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={(event) => {
                      this.setState({ query: event.target.value });
                    }}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={moviesFiltered} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
