import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface State {
  query: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    this.setState({ query: target.value });
  };

  render() {
    const { query } = this.state;

    const visibleMovies = moviesFromServer.filter(
      movie => movie.description.toLowerCase().includes(query.toLowerCase())
          || movie.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <div className="control">
                <label htmlFor="search-query" className="label">
                  Search movie
                  <input
                    onChange={this.handleChange}
                    value={query}
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                  />
                </label>
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
